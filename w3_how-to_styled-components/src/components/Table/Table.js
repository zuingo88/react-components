import React from 'react';

// import { TiTick } from "react-icons/ti";
import {
  ImCheckmark,
  ImCross
} from "react-icons/im";

//  STYLE
import {
  MyTable,
  MyThead,
  MyTbody,
}
  from './Table.style'

const Table = () => {
  return (
    <div id='pageContainer'>
      <MyTable>
        <MyThead>
          <tr style={{ backgroundColor: 'white' }}>
            <th style={{ width: '50%' }}>Features</th>
            <th style={{ width: '25%' }}>Basic</th>
            <th style={{ width: '25%' }}>Pro</th>
          </tr>
        </MyThead>

        <MyTbody>
          <tr>
            <td>Sample Text</td>
            <td><ImCheckmark className='icons' /></td>
            <td><ImCheckmark className='icons' /></td>
          </tr>
          <tr>
            <td>Sample Text</td>
            <td><ImCross className='icons' /></td>
            <td><ImCheckmark className='icons' /></td>
          </tr>
          <tr>
            <td>Sample Text</td>
            <td><ImCheckmark className='icons' /></td>
            <td><ImCheckmark className='icons' /></td>
          </tr>
          <tr>
            <td>Sample Text</td>
            <td><ImCross className='icons' /></td>
            <td><ImCheckmark className='icons' /></td>
          </tr>
          <tr>
            <td>Sample Text</td>
            <td><ImCheckmark className='icons' /></td>
            <td><ImCross className='icons' /></td>
          </tr>
        </MyTbody>
      </MyTable>
    </div>
  )
}

export default Table
