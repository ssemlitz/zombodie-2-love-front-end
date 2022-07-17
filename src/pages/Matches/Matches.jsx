import { useState, useEffect } from 'react'
import React from 'react'
import Logo from '../../assets/zombieapp-logo.png'


const Matches = () => {
  const [matches, setMatches] = useState([])

  return (
    <nav>
      <img 
        img src={Logo} 
        alt="" 
        id="logo" 
      />
    </nav>
  )
}



export default Matches