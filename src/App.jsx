import React, { useState } from 'react'
import"./App.css"
import Header from './comps/Header'
import Footer from './comps/Footer'
import TaskList from './comps/TaskList'
import Addtask from './comps/Addtask'

function App() {
  
  const[tasks,setTasks]=useState([])
  const[show,setShow]=useState(true)
  document.title="Todo App"
  

  
  return (

    
    <>
    <Header/>
    <div className='App'>
      <h2>Todo App</h2>
      <button onClick={()=>{setShow(!show)}} className='trigger'>{show? "Hide":"Show"}</button>
      <Addtask tasks={tasks} setTasks={setTasks}/>
      <TaskList show={show} tasks={tasks} setTasks={setTasks} />
    </div>
    <Footer/>
    </>
    
  )
}

export default App