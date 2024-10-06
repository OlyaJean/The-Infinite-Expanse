import { useEffect, useState } from "react"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"
import spaceFacts from './spaceFacts.json'
import Fact from "./Components/Fact"



function App() {
const NASA_API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const [showModal,setShowModal] = useState(false)
console.log(showModal)
const [data,setData] = useState();
const [fact,setFact] = useState();
const [factModal,setFactModal] = useState(false)

useEffect(()=>{
  window.innerWidth >= 650 ? setShowModal(true): '';
  console.log('complete');

  async function fetchFact(){
    const randomIndex = Math.floor(Math.random()*38);
    console.log(randomIndex)
    try{
      const randomFact = spaceFacts[randomIndex]
      setFact(randomFact);
    }catch(error){
      console.log('error')}
    }
  
  fetchFact();


  async function fetchApiData(){
    const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
    const today = (new Date()).toDateString()
    const localKey = `NASA-${today}`
    if(localStorage.getItem(localKey)){
      const apiData = JSON.parse(localStorage.getItem(localKey))
      setData(apiData)
      return 
    }
    localStorage.clear()
   try{
    const response = await fetch(url);
    const apiData = await response.json();
    localStorage.setItem(localKey,JSON.stringify(apiData))
    setData(apiData);
   }catch(err){console.error('error')}
  }
  fetchApiData()
},[])

      
  

  return (
    <>
    <Navbar showModal={showModal} setShowModal={setShowModal} setFactModal={setFactModal} factModal={factModal}/>
    {factModal? (<Fact fact={fact}/>):('')}
    <Hero data={data}/>
    {data? (<Sidebar data={data}showModal={showModal} setShowModal={setShowModal}/>):(<div className="sideBar"></div>)}

    <Footer/>
    </>
  )
}

export default App
