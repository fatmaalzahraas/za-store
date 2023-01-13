import React ,{useRef, useEffect} from "react";
import {
  CartBagContainer,
  CartBagIcon,
  LogoContainer,
  MainHeader,
  Wrapper,
  MobileContainer,
  MobileToggleIcon,
  Navbar,
  NavIconsContainer,
  NavMenu,
  NavMenuItem,
  NavMenuLink,
  SpanContainer,
  UserImage,
  CartBagItemsNumber,
  HeaderLogo,
  Navigation,
} from "./Header.style";
import userIcon from "../../assets/images/user-icon.png";
import {motion} from 'framer-motion';
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  }
]
const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const navbarRef = useRef(null);
  const navigationRef = useRef(null);
  const navigate = useNavigate();
  const navigateFn = () => {
    navigate('cart');
  }
  const navigationMenuToggling = () => {
    navigationRef.current.classList.toggle("menu-active");
  }
  const stickyNavbar = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbarRef.current.classList.add('sticky');
      } else {
        navbarRef.current.classList.remove('sticky');
      }
    })
  }
  useEffect(() => {
    stickyNavbar();
    return () => window.removeEventListener('scroll', stickyNavbar);
  })
  return (
    <>
      <MainHeader ref={navbarRef}>
        <Wrapper>
          <Navbar>
            <LogoContainer>
              <HeaderLogo>ZAStore</HeaderLogo>
            </LogoContainer>
            <Navigation ref={navigationRef} onClick={navigationMenuToggling}>
            <NavMenu>
            {
              navLinks.map((link, index) => (
                <NavMenuItem key={index}>
                <NavMenuLink to={link.path}>{link.display}</NavMenuLink>
              </NavMenuItem>
              ))
            }
            </NavMenu>
            </Navigation>
            <NavIconsContainer>
              <CartBagContainer onClick={navigateFn}>
              <CartBagIcon></CartBagIcon>
              <CartBagItemsNumber>{totalQuantity}</CartBagItemsNumber>
              </CartBagContainer>
              <SpanContainer>
                <UserImage as={motion.img} whileTap={{ scale: 1.2 }} src={userIcon} alt=""/>
              </SpanContainer>
              <MobileContainer onClick={navigationMenuToggling}>
              <SpanContainer>
                <MobileToggleIcon></MobileToggleIcon>
              </SpanContainer>
            </MobileContainer>
            </NavIconsContainer>
          </Navbar>
        </Wrapper>
      </MainHeader>
    </>
  );
};

export default Header;
