import React, { useState } from 'react'
import"./App.css"
import Header from './comps/Header'
import Footer from './comps/Footer'
import TaskList from './comps/TaskList'

function App() {
  
  
  const[show,setShow]=useState(true)
  document.title="Todo App"

  
  return (

    
    <>
    <Header/>
    <div className='App'>
      <h2>Todo App</h2>
      <button onClick={()=>{setShow(!show)}} className='trigger'>Toggle</button>
      <TaskList show={show}/>
    </div>
    <Footer/>
    </>
    
  )
}

export default App