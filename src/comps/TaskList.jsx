
import React, { useState } from 'react'
import"../App.css"
import TaskCard from './TaskCard'

function TaskList({show}) {
   
  const[tasks,setTasks]=useState([
    {id:1,task:"Doing Home work",progress:true},
    {id:2,task:"Doing study",progress:false},
    {id:3,task:"Doing houseworl work",progress:false}])

   function handleDelete(id){
      console.log(id)
     {/*setTasks(tasks.filter( (task)=>{ return task.id !== id}) ) */}  
      setTasks(tasks.filter( task=> task.id !== id) )
    }

  return (
    <div>   
        <ul>
    {show && tasks.map((task)=>(
           
   <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
     
   ))}
   </ul>
   </div>
  )
}

export default TaskList