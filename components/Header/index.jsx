import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
function Header () {
  return (
    <div className='header'>
        
        <Link  className='el' to={"/"} >Home</Link>
        <Link className='el' to={"/Signin"}>Signin</Link>
        <Link className='el' to={"/Signup"}>Signup</Link>
        <Link className='el' to={"/Admin"}>Admin</Link>

    </div>
  )
}

export default Header 