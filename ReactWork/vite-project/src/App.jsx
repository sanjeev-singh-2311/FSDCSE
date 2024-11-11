/* eslint-disable no-unused-vars */

import React from 'react'
import Student from './Component/Student';

const App = () => {


  const mystyle={
       backgroundColor:'red',
       color:'cyan'
  }

  

  return (
     <div style={mystyle}>Abes engineering college
    <Student college='Abes engineering college' city='ghaziabd'/>
    </div>
     
    
  )
}

export default App

