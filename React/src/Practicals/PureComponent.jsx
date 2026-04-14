////////////////// Using functional component, Parent to child is also ok /////////////////////tgr

import React from "react";

class PureComponent extends React.PureComponent {
  render() {
    console.log("Pure Component Rendered");
    return <h1>{this.props.name}</h1>;
  }
}

export default PureComponent;


// function reducer(state, action){
//     switch(action.type){
//         case "increment": 
//         return {count: state.count+1}
//         case "decrement" :
//         return {count: state.count-1}
//         default: 
//         return state
//     }
// }

// import React, { useReducer } from 'react'

// const Counter = () => {
//     let [state, dispatch] = useReducer(reducer, {count: 0})
//   return (
//     <div>
//         <h2>Count: {state.count}</h2>
//         <button onClick={()=>dispatch({type: "increment"})}>+</button>
//         <button onClick={()=>dispatch({type: "decrement"})}>-</button>
//     </div>
//   )
// }

// export default Counter