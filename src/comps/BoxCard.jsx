import React, { useState } from 'react'
import "../App.css"

function BoxCard({cls,children}) {
    const[hide,setHide]=useState(true)
  return (
    <div className={hide? "":"hidden"}>

<div className = {`box ${cls}`}>
    {children}
    </div>

    <button onClick={()=>setHide(!hide)} className="trigger"> Hide</button>
    </div>

  )
}

export default BoxCard