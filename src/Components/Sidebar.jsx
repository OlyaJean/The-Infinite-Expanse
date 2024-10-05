import React, { useEffect, useRef, useState } from 'react'
import closeModalIcon from './../assets/closeModal.png'

const Sidebar = (props) => {
    const {showModal,setShowModal,data} = props;

    

    const sideModal = useRef();
    
  
    window.addEventListener('resize',()=>{
        window.innerWidth >= 650 ? setShowModal(true): setShowModal(false)
    })
  
   
useEffect(()=>{
    showModal ? sideModal.current.style.translate = 0 : sideModal.current.style.translate = '100%';
})
  
    
  
  return (
    <div ref={sideModal} className='sideBar'>
      <h3>{data.title}</h3>
      <h5>{data.date}</h5>
      <p>{data.explanation}</p>
      <img src={closeModalIcon} alt="" onClick={()=>{setShowModal(false)}}/>

    </div>
  )
}

export default Sidebar
