import React from 'react'
import { useDispatch } from 'react-redux'
import { setName } from '../Slice'

const ChildRedux = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(setName("Aswathy"))}>Ok</button>
    </div>
  )
}

export default ChildRedux