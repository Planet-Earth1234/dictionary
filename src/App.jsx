import { useState } from 'react'

import './App.css'

function App() {
  const [quote , setquote] = useState("")
   
  
  const fetched = async () => {
    // Use parentheses around parameter
    // Use try/catch block to handle errors
    try {
      // Await for fetch result
      const res = await fetch("https://api.adviceslip.com/advice");
      // Await for json parsing
      const data = await res.json();
      // Return data or store it in state or pass it as prop
      
       return data.slip.advice;
    } catch (e) {
      console.error(e);
    }
  };

 
  
  return (
    <div className = "App min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 ">
      <div className = "glass h-screen w-full flex items-center justify-center">
    <h1 className="font-custom text-slate-300 text-6xl">Trying to fetch the data</h1>
    
    <h2>{quote}</h2>
    <button onClick= {async () => { setquote(""); setquote( await fetched())}} > Generate </button> 

    </div>
    
  
      </div>

  )
}

export default App; 

