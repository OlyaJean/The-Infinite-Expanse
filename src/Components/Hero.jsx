import React from 'react'
import spaceImg from './../assets/space.jpeg'
import loadingIcon from './../assets/loadingIcon.png'
const Hero = (props) => {
  const {data} = props
  
  return (
    <div className='imgContainer'>
     {data? (<img className='spaceImg' src={data.url} alt="" />): (<div className='noDataDiv'><img src={loadingIcon} alt="" /></div>)}
    </div>
  )
}

export default Hero


