import React, { useState } from 'react'
import Fchild from '../Practicals/Fchild'

const Fparent = () => {
    let [data, setData] = useState("")

  return (
    <div>
    <Fchild props = {setData}/>
    <h2>{data}</h2>
    </div>
  )
}

export default Fparent