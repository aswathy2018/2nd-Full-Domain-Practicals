import { useState } from "react";

const Child = ({props}) => {

    let [val, updated] = useState('')
    
    let res = (upd) =>{
        props(val)
        updated("")
    }
    return(
        <div>
            <input type="text" value={val} onChange={(e)=>updated(e.target.value)}/>
            <button onClick={res}>Submit</button>
        </div>
    )
}

export default Child;