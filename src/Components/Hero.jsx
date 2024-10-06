import React from 'react'
import spaceImg from './../assets/space.jpeg'
import loadingIcon from './../assets/loadingIcon.png'
const Hero = (props) => {
  const {data} = props
  
  return (
    <>
     {data? (<img className='spaceImg' src={data.url} alt="" />): (<div className='noDataDiv'><img src={loadingIcon} alt="" /></div>)}
    </>
  )
}

export default Hero
