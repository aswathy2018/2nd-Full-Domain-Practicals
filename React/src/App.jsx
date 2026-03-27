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

import PureComponent from "./Practicals/PureComponent"

const App = () => {
  return (
    <PureComponent name = "Aswathy"/>
  )
}

export default App