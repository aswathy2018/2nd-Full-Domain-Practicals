import React from 'react'
import { useReducer } from 'react'

function reducer(state, action){
    switch(action.type){
        case "increment": return state+1

        case "decrement": return state-1

        case "reset": return 0

        default: return state
    }
}

const CounterReducer = () => {                                                                                                                                                    

    const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div>
        <h2>Counter..</h2>

        <h3>Count: {count}</h3>
        <button onClick={()=>dispatch({type: "increment"})}>+</button>

        <button onClick={()=>dispatch({type: "decrement"})}>-</button>

        <button onClick={()=>dispatch({type: "reset"})}>Reset</button>

    </div>
  )
}

export default CounterReducer