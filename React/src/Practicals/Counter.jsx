import React, { useContext } from 'react'
import { CounterContext } from '../../CounterContext'

const Counter = () => {
    const {state, dispatch}=useContext(CounterContext)
  return (
    <div>
        <h1>Count: {state.count}</h1>
        <button onClick={()=>dispatch({type: "increment"})}>Increment</button>
        <button onClick={()=>dispatch({type: "decrement"})}>Dec</button>
    </div>
  )
}

export default Counter