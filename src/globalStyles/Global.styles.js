import styled, { createGlobalStyle, css } from "styled-components";
import { NavLink, Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
:root {
    --primary-color: #0a1d37;
    --text-color: #999;
    --hero-bg: #d6e5fb;
    --cart-bgc-01: #fdefe6;
    --cart-bgc-03: #ceebe9;
    --cart-bgc-04: #e2f2b2;
    }
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body {
        font-family: 'Montserrat', sans-serif;
    }
    section {
        padding: 60px 0;
    }
`;
const headingStyles = css`
  color: var(--primary-color);
  padding: 0;
  margin: 0;
  font-weight: 600;
`;
export const MainContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;

  @media screen and (max-width: 560px) {
    padding: 0 30px;
  }
`;
export const H1 = styled.h1`
  ${headingStyles}
  font-size: 1.5rem;
  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 2rem;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 2.3rem;
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1200px) {
    font-size: 2.6rem;
  }
`;
export const H2 = styled.h2`
  ${headingStyles}
  font-size: 1.5rem;
`;
export const H3 = styled.h3`
  ${headingStyles}
  font-size: 1.1rem;
`;
export const TextWrapper = styled.p`
  margin: 0;
  padding: 0;
  color: var(--text-color);
  font-size: 1rem;
  @media (max-width: 767px) {
    font-size: 0.8rem;
  }
`;
export const Menu = styled.ul`
  list-style: none;
`;
export const MenuLink = styled(NavLink)`
  text-decoration: none;
`;
export const BtnLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
export const Button = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  color: #fff;
  background-color: var(--primary-color);
  @media (max-width: 767px) {
    font-size: 0.8rem;
    padding: 7px 18px;
  }
`;
export default GlobalStyle;
