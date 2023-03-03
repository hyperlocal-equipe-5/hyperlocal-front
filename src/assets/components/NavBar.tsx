/* eslint-disable prettier/prettier */
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Link to="/" >Login</Link>
        <Link to="/home" >Home</Link>
        <Link to="/cadastro" >Cadastro</Link>
       
    </div>
  )
}

export default NavBar
