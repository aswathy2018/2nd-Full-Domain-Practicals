import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'

const CounterCallback = () => {

    const [count, setCount] = useState(0)

    const handleClick = useCallback(()=>{
        console.log("Button Clicked..")
    }, [])
  return (
    <div>
        <h2>Count {count}</h2>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={handleClick}>Click me..</button>
    </div>
  )
}

export default CounterCallback