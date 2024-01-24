import React, { useState } from 'react'
import "./AddTask.css"

function Addtask({tasks,setTasks}) {
    const[taskValue,settaskValue]=useState("")
    const[progress,setprogress]=useState()


    function handlereset(){
        settaskValue("")
    }

    const handlesubmit =(event)=> {
        event.preventDefault();  // to avoid refreshing
        console.log(progress)

        const todo={
            id:Math.floor(Math.random() *10000),
            task:taskValue,
            progress:Boolean(progress)
        }
        setTasks([...tasks,todo])

        console.log(todo)
        handlereset()
      
    }

    
  return (
   <section className="addtask">
    <form onSubmit={handlesubmit}>
      <label htmlFor="task">Add Task:</label>
      <input onChange={(e)=>{ settaskValue(e.target.value)}} type="text" name="task" id="task" placeholder='task name' autoComplete='off' value={taskValue}/>
      <select onChange={(e)=>{setprogress(e.target.value)}} value={progress}>
        <option value="true">Completed</option>
        <option value="false">incompleted</option>
      </select>
      
      <span onClick={handlereset} className='bollu'>Reset</span>
      <button type="submit">Add Task</button>
    </form>


    {/* <h2>{taskValue}</h2> */}
   </section>
  )
}

export default Addtask