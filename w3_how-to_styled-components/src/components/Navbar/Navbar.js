import React from 'react';
import logo from '../../logo.png'
import { Link } from 'react-router-dom';
import {
  NavLink,
  NavbarBar,
  Logo,
  NavList,
  NavItem,
  Hamburger
} from './Navbar.style';

//  ICONS
import { HiMenu } from "react-icons/hi";
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <NavbarBar style={{ fontSize: '20px' }}>
      <NavLink to='/'>
        <Logo src={logo} alt="logo" />
      </NavLink>

      <NavList>
        <NavItem>
          <NavLink to='/iconbar'>IconBar</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/table'>Table</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/chart'>Chart</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/myslate'>MySlate</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/myplate'>MyPlate</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/myckeditor'>MyCKEditor</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/styledsystem'>StyledSystem</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/myredux'>MyRedux</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/tailwindcomponent'>Tailwind</NavLink>
        </NavItem>
      </NavList>

      <NavList>
        {/* {
          links.map(el => {
            <NavItem key={el.id}>
              <a href={el.url} alt={el.text}>
                {el.text}
              </a>
            </NavItem>
          })
        } */}
      </NavList>

      <Hamburger><HiMenu className='hamburger' /></Hamburger>
    </NavbarBar>
  )
}

export default Navbar