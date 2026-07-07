import React from 'react'
import { useRef } from 'react'

const CountRef = () => {

    const count = useRef(0)

    let handle = ()=>{
        count.current++
        console.log("Clicked: ", count.current)
    }

  return (
    <div>
        <button onClick={handle}>Ok</button>
    </div>
  )
}

export default CountRef