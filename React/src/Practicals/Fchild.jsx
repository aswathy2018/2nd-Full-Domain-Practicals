import React, { useState } from 'react'

const Fchild = ({props}) => {
  let [text, setText] = useState("")
  return (
    <div>
      <input type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
      <button onClick={()=>props(text)}> Ok </button>
    </div>
  )
}

export default Fchild