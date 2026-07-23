import React from 'react'
import { useState } from 'react'

const CounterN = () => {
    let [data, setData] = useState(0)

    let inc = (() => {
        if (data == 5) {
            return
        }
        setData(data + 1)
    })

    let dec = (() => {
        if (data == 0) {
            return
        }
        setData(data - 1)
    })

    let res = (() => {
        setData(0)
    })

    return (
        <div>
            <h2>{data}</h2>
            <button onClick={() => inc()}>+</button>
            <button onClick={() => dec()}>-</button>
            <button onClick={() => res()}>@</button>
        </div>
    )
}

export default CounterN