import React from 'react'

const ChildReactMemo = React.memo(({ increment })=>{
    console.log("Child rendered..")

    return(
        <div>
            <button onClick={increment                }>+</button>
        </div>
    )
})

export default ChildReactMemo