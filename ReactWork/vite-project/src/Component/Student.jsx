/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'
const Student = (props) => {
  return (
    <table>
      <tbody>
        <tr>
         <th> Roll No:</th><th> Name </th><th> Age</th>
        </tr>

         <tr>
          <td>136</td>
          <td>James Bond</td>
          <td>20</td>
         </tr>
         <tr>
         
          <td colSpan={2}>{props.college}</td>
          <td colSpan={2}>{props.city}</td>
         </tr>
      </tbody>
    </table>
   

  )
}

export default Student