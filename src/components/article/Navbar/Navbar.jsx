import React from 'react'
import './navbar.css'

import{RiMenu3Line, RiCloseLin} from 'react-icons/ri'
import logo from '../../assets/logo.svg'


// BEM -> Block Element Modifier

const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
       <div className='gpt3__navbar-links'>
          <div className='gpt3__navbar-links_logo'> 
          <img src={logo} alt="logo"/>
    </div>
          <div className='gpt3__navbar-links_container'>
            <p><a href='home'>Home</a> </p>
            <p><a href='wgt3'>What is GPT-3</a> </p>
            <p><a href='possibility'>Open AI</a> </p>
            <p><a href='features'>Case Studies</a> </p>
            <p><a href='home'>Library</a> </p>
          </div>
    </div>
    </div>
  )
}

export default Navbar
