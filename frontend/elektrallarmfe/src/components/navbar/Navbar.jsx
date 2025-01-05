import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav>
    <ul>
        <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/services" activeClassName="active">Servizi</NavLink></li>
        <li><NavLink to="/gallery" activeClassName="active">Galleria</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contatti</NavLink></li>
    </ul>
</nav>
  )
}

export default Navbar