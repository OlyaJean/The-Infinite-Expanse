import { useEffect, useState } from "react"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"
import loadingIcon from './assets/loadingIcon.png'


function App() {

const [showModal,setShowModal] = useState(false)
console.log(showModal)
const [data,setData] = useState(null);


useEffect(()=>{
  window.innerWidth >= 650 ? setShowModal(true): '';
  console.log('complete');

  const NASA_API_KEY = 'LJ3yeAqjpd8z1cHxpwELfOGJ8hv1eE32d9cGb8yW';
  

  async function fetchApiData(){
    const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
   try{
    const response = await fetch(url);
    const apiData = await response.json();
    setData(apiData);
    console.log(apiData);
   
   }catch(err){console.error('error')}
  }
  
  fetchApiData()
},[])

  return (
    <>
    <Navbar showModal={showModal} setShowModal={setShowModal}/>
    <Hero data={data}/>
    {data? (<Sidebar data={data}showModal={showModal} setShowModal={setShowModal}/>):(<div className="sideBar"></div>)}

    <Footer/>
    </>
  )
}

export default App
