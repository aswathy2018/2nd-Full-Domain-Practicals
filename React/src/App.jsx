/////////////Child to parrent

// import React, { useState } from 'react'
// import Child from '../src/Practicals/Child'

// const App = () => {
//   let [num, updatedVal] = useState('User')
  
//   let handle = (val) =>{
//     updatedVal(val)
//   }
//   return (
//     <>
//     <h1>Hello {num}</h1>
//     <Child props = {handle}/>
//     </>
//   )
// }

// export default App


//////////////// Lazy Loading

// import LazyLoading from './Practicals/LazyLoading'

// const App = () => {
//   return (
//     <>
//     <LazyLoading/>
//     </>
//   )
// }

// export default App


//////////////////////////////////////// Pure component///////////////////

// import PureComponent from "./Practicals/PureComponent"

// const App = () => {
//   return (
//     <PureComponent name = "Aswathy"/>
//   )
// }

// export default App


// import { useState } from "react"
// import Demo from "../Demo"

// const App = () => {
//   let [msg, setMsg] = useState("")
  
//   let handle = (data)=>{
//     setMsg(data)
//   }
//   return (
//     <div>
//       <h2>Hii : {msg}</h2>
//       <Demo props = {handle}/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Counter from '../Counter'

// const App = () => {
//   return (
//     <div><Counter/></div>
//   )
// }

// export default App


import React from 'react'
import Performance from './Practicals/Performance'

const App = () => {
  return (
    <>
    <Performance/>
    </>
  )
}

export default App