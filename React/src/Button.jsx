import React, { useContext } from 'react'
import { ToggleContext } from './context/ToggleContext'

const Button = () => {

    const {setToggle} = useContext(ToggleContext)
  return (
    <div>
        <button onClick={()=>setToggle(true)}>On</button>
    </div>
  )
}

export default Button