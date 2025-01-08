import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.scss"
import { FaPhone } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav>
    <ul>
        <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
        {/* <li><NavLink to="/services" activeClassName="active">Servizi</NavLink></li> */}
        {/* <li><NavLink to="/gallery" activeClassName="active">Galleria</NavLink></li> */}
        {/* <li><NavLink to="/about" activeClassName="active">About</NavLink></li> */}
        {/* <li><NavLink to="/contact" activeClassName="active">Contatti</NavLink></li> */}
    </ul>
    <a href="tel:+393468704412" className="buttonPhone">
        <FaPhone className='phoneIcon'/> +39 346 8704 412
      </a>
</nav>
  )
}

export default Navbar