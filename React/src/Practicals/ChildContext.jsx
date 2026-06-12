import { useContext } from 'react'
import UserContext from '../context/ChildToParentContext'

const ChildContext = () => {
    const {setMsg} = useContext(UserContext)
  return (
    <button onClick={()=>setMsg("It's a message from child..")}>
        Submit
    </button>
  )
}

export default ChildContext