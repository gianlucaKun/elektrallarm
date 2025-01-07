import React from 'react'
import logo from '../../assets/img/logo.png';
import './SiteTitle.scss'
const SiteTitle = () => {
  return (
    <div className='site-title-container'>
         <img
        className="site-logo"
        src={logo}
        alt="Logo Elektrallarm"
      /> 
    </div>
  )
}

export default SiteTitle