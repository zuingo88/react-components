import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #30B8AE;

  &:hover {
    color: black;
  }
`

export const NavLinks = styled.a`
  text-decoration: none;
  color: #30B8AE;

  &:hover {
    color: black;
  }
`

export const NavbarBar = styled.nav`
  position: relative;

  width: 100%;
  min-height: 100px;
  padding: 5px 20px;

  background-color: white;
  border-bottom: solid 2px black;

  display: flex;
  align-items: center;

  -webkit-box-shadow: 0px 4px 5px 0px rgba(50, 50, 50, 0.75);
  -moz-box-shadow:    0px 4px 5px 0px rgba(50, 50, 50, 0.75);
  box-shadow:         0px 4px 5px 0px rgba(50, 50, 50, 0.75);

  z-index: 999;
`

export const Logo = styled.img`
  all: unset;
  width: 75px;
  height: auto;
  margin-right: 20px;
  padding: 10px;
`

export const NavList = styled.ul`
  list-style-type: none;

  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  flex-grow: 1;

  @media all and (max-width: 767px) {
    display: none
  }
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

export const Hamburger = styled.div`
  /* position: relative; */

  width: 100px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  & .hamburger {
    width: 35px;
    height: auto;

    cursor: pointer;

    transition: all 0.5s;

    &:hover {
      transform: rotate(90deg);
    }

    /* &:active {
      transform: rotate(360deg);
    } */
  }

  @media all and (min-width: 768px) {
    display: none
  }
`

export const DropDown = styled.div`
  position: absolute;
  right: 0;
  top: 100%;

  background-color: white;

  border: solid 2px black;

  -webkit-box-shadow: -3px 4px 5px 0px rgba(50, 50, 50, 0.75);
  -moz-box-shadow:    -3px 4px 5px 0px rgba(50, 50, 50, 0.75);
  box-shadow:         -3px 4px 5px 0px rgba(50, 50, 50, 0.75);

  visibility: hidden;
`

export const DropDownUl = styled.ul`
  display: flex;
  flex-direction: column;
`