import { useState } from "react"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"


function App() {
const [showModal,setShowModal] = useState(false)
console.log(showModal)
  return (
    <>
    <Navbar showModal={showModal} setShowModal={setShowModal}/>
    <Hero/>
    <Sidebar showModal={showModal} setShowModal={setShowModal}/>
    <Footer/>
    </>
  )
}

export default App
