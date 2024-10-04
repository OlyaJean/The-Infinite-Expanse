import React from 'react'
import openModalIcon from "./../assets/openModal.png"

const Navbar = (props) => {
    const {showModal,setShowModal} = props;
   
    ;
  return (
    
      <nav>
        <ul>
            <li>Interesting Facts</li>
            <li>Images</li>
            <li onClick={()=>{setShowModal(true);
                console.log(showModal)
            }} className='lastList'>More Info <img src={openModalIcon} alt="" /></li>
        </ul>
      </nav>
    
  )
}

export default Navbar
