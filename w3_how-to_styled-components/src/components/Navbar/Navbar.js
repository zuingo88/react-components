import React, { useState, useEffect, useRef } from 'react';
import useOnClickOutside from './useOnCLickOutside';
import logo from '../../logo.png';
// import { Link } from 'react-router-dom';
import { links } from './links';
import "tailwindcss/tailwind.css";

import {
  NavLink,
  NavLinks,
  NavbarBar,
  Logo,
  NavList,
  NavItem,
  Hamburger,
  DropDown,
  DropDownUl,
  DropDownLi
} from './Navbar.style';

//  ICONS
import { HiMenu } from "react-icons/hi";
// // import { FaExternalLinkSquareAlt } from 'react-icons/fa';

const Navbar = () => {

  //  Creo un ref che aggiungerò all'elemento al di fuori del quale voglio 'sentire' il click.
  const ref = useRef();
  
  //  State del mio DropDown. 
  const [show, setShow] = useState(false);

  useOnClickOutside(ref, () => setShow(false));

  return (
    <NavbarBar style={{ fontSize: '20px' }}>

      <NavLink to='/'
      className='xs:flex-grow lg:flex-grow-0 '>
        <Logo src={logo} alt="logo" />
      </NavLink>

      {/* <NavList>
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
      </NavList> */}

      <NavList>
        {
          links.map(el => {
            return (
              <NavItem key={el.id}>
                <NavLinks href={el.url} alt={el.text}>
                  {el.text}
                </NavLinks>
              </NavItem>
            )
          })
        }
      </NavList>

      <Hamburger onClick={() => setShow(!show)}>
        <HiMenu className='hamburger' />

        <DropDown className={`${show ? 'show' : ''}`} ref={ref}>
          {/* lista links */}
          <DropDownUl>
            {
              links.map(el => {
                return (
                  <NavItem key={el.id}>
                    <NavLinks href={el.url} alt={el.text}>
                      {el.text}
                    </NavLinks>
                  </NavItem>
                )
              })
            }
          </DropDownUl>
        </DropDown>
      </Hamburger>
    </NavbarBar>
  )
}

export default Navbar