import React from 'react'
import { useSelector } from 'react-redux'

const Parent = () => {

    const name = useSelector(state=>state.user.name)
  return (
    <div>
        <h1>Prent: {name}</h1>
    </div>
  )
}

export default Parent