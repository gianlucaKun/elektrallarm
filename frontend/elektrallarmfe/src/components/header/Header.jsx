import React from 'react'
import Navbar from '../navbar/Navbar'
import SiteTitle from '../siteTitle/SiteTitle'
import './Header.scss'

const Header = () => {
  return (
    <header>
      <SiteTitle />
      <Navbar/>
    </header>
  )
}

export default Header