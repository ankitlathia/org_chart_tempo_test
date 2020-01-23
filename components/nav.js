import Link from 'next/link';
import styled from "styled-components";

const NavWrapper = styled.nav`
  background: #000;
  text-align: center;
  overflow: hidden;

  h1 {
    color:#fff;
  }
`;

const Nav = () => (
  <NavWrapper>
    <h1>Organization Chart</h1>
  </NavWrapper>
);

export default Nav;
