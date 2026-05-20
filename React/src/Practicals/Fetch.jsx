import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((data)=>setData(data))
        .catch((error)=>console.log(error))
    }, [])
  return (
    <div>
        <h2>Fetched data: </h2>
        <ol>
            {data.map((item)=>(
                <li key={item.id}>{item.title}</li>
            ))}
        </ol>
    </div>
  )
}

export default Fetch