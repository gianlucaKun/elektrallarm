import React from 'react'
import Navbar from '../navbar/Navbar'
import SiteTitle from '../siteTitle/SiteTitle'

const Header = () => {
  return (
    <header>
      <SiteTitle />
      <Navbar/>
    </header>
  )
}

export default Header