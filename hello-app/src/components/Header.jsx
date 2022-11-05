import React from 'react'
import imgIronLog from "../images/ironhack-logo-xs.png"
import imgMenu from "../images/menu-top-xs.png"



function Header() {


  return (


    <div>

    <nav id='nav'>
    <img src={imgIronLog} alt="Ironhack" />
    <img id='menu' src={imgMenu} alt="menu" />
    </nav>
    
    <h2>Say hello to </h2>
    <h2>REACTJS</h2>
    <p>You will learn how to use 
    <br />the most popular frontend libray
    <br />and become a super Ninja developer</p>
    <button>Awesome!</button>
    
    
    
    
    
    </div>
  )
}

export default Header