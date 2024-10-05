import React from 'react'
import spaceImg from './../assets/space.jpeg'
const Hero = (props) => {
  const {data} = props
  return (
    <>
      <img className='spaceImg' src={data.url} alt="" />
    </>
  )
}

export default Hero
