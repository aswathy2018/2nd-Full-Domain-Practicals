import React from 'react'
import { useState } from 'react'
import UseMemo from './UseMemo'

const Performance = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")

    console.log("Parent component rendered");
  return (
    <div>
        <h1>Performance optimization example..</h1>
        <button onClick={() => setCount(count+1)}>+</button>
        <input value={text} onChange={(e)=>setText(e.target.value)}/>

        <UseMemo count = {count}/>
    </div>
  )
}

export default Performance