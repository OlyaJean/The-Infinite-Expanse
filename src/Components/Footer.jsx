import React, { useState } from 'react'
import infoIcon from './../assets/infoIcon.png'

const Footer = () => {
  const [info,setInfo] = useState(false)
  return (
    <div className='footer'>
        <h2>The Infinite Expanse</h2>
      <p>Astronomy Picture of the Day (APOD) <img src={infoIcon} alt="" onClick={()=>{ info? setInfo(false):setInfo(true)}}/></p>
      {info? <p className='infoContainer'>The Astronomy Picture of the Day (APOD) is a NASA and Michigan Technological University (MTU) website that features a new astronomical image and explanation each day</p>:''}
      <p>Boundless nature of the universe</p>
    </div>
  )
}

export default Footer
