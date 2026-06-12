import React from 'react'
import { useState } from 'react'
import UserContext from '../context/ChildToParentContext'
import ChildContext from './ChildContext'

const ParentContext = () => {
    const [msg, setMsg] = useState('Hello parent')

  return (
    <UserContext.Provider value = {{msg, setMsg}}>
        <h2>Parent message: {msg}</h2>
        <ChildContext/>
    </UserContext.Provider>
  )
}

export default ParentContext