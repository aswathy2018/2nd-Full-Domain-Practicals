import { useState } from "react";

const Demo = ({props}) =>{

    let child = ()=>{
        props("Hloo i'm child..")
    }
    return (
        <div>
            <button onClick={()=>child()}>Ok</button>
        </div>
    )
}

export default Demo;