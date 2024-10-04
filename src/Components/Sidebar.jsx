import React, { useEffect, useRef, useState } from 'react'
import closeModalIcon from './../assets/closeModal.png'

const Sidebar = (props) => {
    const {showModal,setShowModal} = props;
    window.addEventListener('DOMContentLoaded',()=>{
        window.innerWidth >= 650 ? setShowModal(true): setShowModal(false)
    })

 
    const sideModal = useRef();
    
  
    window.addEventListener('resize',()=>{
        window.innerWidth >= 650 ? setShowModal(true): setShowModal(false)
    })
  
   
useEffect(()=>{
    showModal ? sideModal.current.style.translate = 0 : sideModal.current.style.translate = '100%';
})
  
    
  
  return (
    <div ref={sideModal} className='sideBar'>
      <h3>Title1</h3>
      <h5>Description</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur unde saepe explicabo autem eveniet beatae officiis, voluptatibus libero vitae molestiae omnis? Esse quos accusantium corporis sunt id dolore adipisci.</p>
      <img src={closeModalIcon} alt="" onClick={()=>{setShowModal(false)}}/>

    </div>
  )
}

export default Sidebar
