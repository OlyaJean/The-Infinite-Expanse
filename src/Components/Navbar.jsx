import React from 'react'
import openModalIcon from "./../assets/openModal.png"

const Navbar = (props) => {
    const {showModal,setShowModal,setFactModal,factModal} = props;
   
    ;
  return (
    
      <nav>
        <ul>
            <li onClick={()=>{factModal? setFactModal(false): setFactModal(true) }}>Space Facts <img src={openModalIcon} alt="" /></li>
            <li onClick={()=>{setShowModal(true);
                console.log(showModal)
            }} className='lastList'>APOD Info <img src={openModalIcon} alt="" /></li>
        </ul>
      </nav>
    
  )
}

export default Navbar
