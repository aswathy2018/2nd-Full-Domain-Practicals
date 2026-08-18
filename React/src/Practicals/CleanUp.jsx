import React from 'react'
import { useEffect } from 'react'

const CleanUp = () => {
    useEffect(()=>{
        const interval = setInterval(()=>{
            console.log("Running..")
        }, 1000)
  return ()=>{
    clearInterval(interval)
    console.log("Interval stopped")
  }
  }, [])
  return <h1>Hiiii</h1>
}

export default CleanUp