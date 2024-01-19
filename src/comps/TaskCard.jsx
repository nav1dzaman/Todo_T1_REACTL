import React, { useState } from 'react'
import"../App.css"


function TaskCard({task,handleDelete}) {
  return (
    <div>
    <li className={task.completed? "completed" : "incomplete"}> 
    <span>{task.id}-  {task.task}</span>
    <button onClick={()=>{handleDelete(task.id)}} className='delete'>Delete</button>
    </li>
</div>
  )
}

export default TaskCard