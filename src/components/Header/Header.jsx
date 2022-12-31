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
  const navbarRef = useRef(null);
  const navigationRef = useRef(null);
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
              <CartBagContainer>
              <CartBagIcon></CartBagIcon>
              <CartBagItemsNumber>12</CartBagItemsNumber>
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
