import React from 'react';

//  REACT-ICONS
import {
  FaHome,
  FaSearch,
  FaTrashAlt
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { GiEarthAmerica } from "react-icons/gi";

//  STYLE
import {
  Vertical,
  VrBar,
  VrHome,
  VrItem,
  Horizontal,
  HrBar,
  HrHome,
  HrItem
} from './IconBar.style';

const IconBar = () => {
  return (
    <div id='pageContainer'>

      <Vertical>
        <VrBar>
          <VrHome><FaHome className='navIcon' /></VrHome>
          <VrItem><FaSearch className='navIcon' /></VrItem>
          <VrItem><GrMail className='navIcon' /></VrItem>
          <VrItem><GiEarthAmerica className='navIcon' /></VrItem>
          <VrItem><FaTrashAlt className='navIcon' /></VrItem>
        </VrBar>
      </Vertical>

      <Horizontal>
        <HrBar>
          <HrHome><FaHome className='navIcon' /></HrHome>
          <HrItem><FaSearch className='navIcon' /></HrItem>
          <HrItem><GrMail className='navIcon' /></HrItem>
          <HrItem><GiEarthAmerica className='navIcon' /></HrItem>
          <HrItem><FaTrashAlt className='navIcon' /></HrItem>
        </HrBar>
      </Horizontal>
    </div>
  )
}

export default IconBar
