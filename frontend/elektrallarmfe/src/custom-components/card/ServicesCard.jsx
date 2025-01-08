import React from 'react'

const ServicesCard = ({ title, description, image, isImageRight }) => {
  return (
    <div className={`services-card ${isImageRight ? "image-right" : "image-left" } `}>
        <div  className="services-card-content">
            <h2>{title}</h2>
            <p>{description}</p>
            <button className='colorForNight borderNight borderDay'>Maggiori info</button>
        </div>
        <div className="services-card-image">
            <img src={image} alt={title} />
        </div>
        
    </div>
  )
}

export default ServicesCard