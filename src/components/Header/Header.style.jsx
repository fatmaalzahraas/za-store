import styled from "styled-components";
import {
  Menu,
  MenuLink,
  MainContainer,
  H3,
} from "../../globalStyles/Global.styles";
import { RiShoppingBagLine, RiMenuLine } from "react-icons/ri";

export const MainHeader = styled.header`
  width: 100%;
  height: 70px;
  line-height: 70px;
  transition: 0.5s ease;
  &.sticky {
    width: 100%;
    height: 70px;
    line-height: 70px;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: #fff;
    box-shadow: 3px 3px 8px -3px #ddd;
    transition: 0.5s ease;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 60px;
    line-height: 60px;
  }
`;
export const Wrapper = styled(MainContainer)`
  height: 100%;
`;
export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const HeaderLogo = styled(H3)`
  font-size: 1.1rem;
  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;
export const Navigation = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.52);
    z-index: 9999;
    display: none;
    &.menu-active {
      display: block;
    }
  }
`;
export const NavMenu = styled(Menu)`
  display: flex;
  align-items: center;
  column-gap: 2.5rem;
  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 250px;
    flex-direction: column;
    background-color: #fff;
    z-index: 99999;
    padding-top: 50px;
  }
`;
export const NavMenuItem = styled.li`
  height: 100%;
  @media (max-width: 768px) {
    height: auto;
  }
`;
export const NavMenuLink = styled(MenuLink)`
  color: var(--primary-color);
  font-weight: 500;
  cursor: pointer;
  height: 100%;
  display: block;
  &.active {
    font-weight: 700;
  }
`;
export const NavIconsContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.3rem;
`;
export const SpanContainer = styled.span`
  display: flex;
  align-items: flex-end;
`;
export const CartBagContainer = styled(SpanContainer)`
  position: relative;
`;
export const CartBagIcon = styled(RiShoppingBagLine)`
  font-size: 1.4rem;
  color: var(--primary-color);
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
export const CartBagItemsNumber = styled.span`
  content: "";
  position: absolute;
  top: -8%;
  right: -20%;
  background-color: var(--primary-color);
  color: #fff;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-size: 0.6rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 13px;
    height: 13px;
    font-size: 0.5rem;
  }
`;
export const UserImage = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-top: 0.3rem;
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;
export const MobileContainer = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const MobileToggleIcon = styled(RiMenuLine)`
  font-size: 1.3rem;
  color: var(--primary-color);
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
