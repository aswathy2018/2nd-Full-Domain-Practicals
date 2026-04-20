import React from "react";

const UseMemo = React.memo(({count})=>{
    console.log("Child component rendered")
    return <h2>Count it {count}</h2>
})

export default UseMemo;