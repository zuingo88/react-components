import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #30B8AE;

  &:hover {
    color: black;
  }
`

export const NavbarBar = styled.nav`
  width: 100%;
  min-height: 120px;
  position: fixed;
  top: 0;

  background-color: white;
  border-bottom: solid 2px black;

  display: flex;
  align-items: center;

  z-index: 999;
`

export const Logo = styled.img`
  width: 75px;
  height: auto;
  padding: 5px;
`

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`

export const NavItem = styled.li`
  margin: 3px;
  padding: 5px;
  
  border-right: solid 2px grey;
  border-bottom: solid 1px grey;
  border-radius: 3px;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.5);
  -moz-box-shadow:    2px 2px 5px 0px rgba(50, 50, 50, 0.5);
  box-shadow:         2px 2px 5px 0px rgba(50, 50, 50, 0.5);
`