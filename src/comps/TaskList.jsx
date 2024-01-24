
import React, { useState } from 'react'
import"../App.css"
import TaskCard from './TaskCard'
import BoxCard from './BoxCard'

function TaskList({show,tasks,setTasks}) {
   

   function handleDelete(id){
      console.log(id)
     {/*setTasks(tasks.filter( (task)=>{ return task.id !== id}) ) */}  
      setTasks(tasks.filter( task=> task.id !== id) )
    }

  return (
    <div>   
        <ul>
          <h2 style={{ textAlign: 'left' }}>Task List</h2>
    {show && tasks.map((task)=>(
           
   <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
     
   ))}
   </ul>

   {/* <BoxCard cls="success">
   <p className="title">Lorem ipsum dolor sit.</p>
    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, repellat!</p>    learning purpose of childre compnonent
   </BoxCard> */}


   {/* <div className="box success">
    <p className="title">Lorem ipsum dolor sit.</p>
    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, repellat!</p>
   </div> */}
   {/* <div className="box warning">
    <p className="title">Lorem ipsum dolor sit.</p>
    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, repellat!</p>
   </div>
   <div className="box alert">
    <p className="title">Lorem ipsum dolor sit.</p>
    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, repellat!</p>
   </div> */}
   </div>
  )
}

export default TaskList