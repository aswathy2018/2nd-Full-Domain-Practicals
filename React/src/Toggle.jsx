import React, { useContext } from 'react'
import { ToggleContext } from './context/ToggleContext'

const Toggle = () => {

  const {toggle} = useContext(ToggleContext)
  return (
    <div>
      {toggle? "Toggle is on.. ": "Toggle is off!!"}
    </div>
  )
}

export default Toggle