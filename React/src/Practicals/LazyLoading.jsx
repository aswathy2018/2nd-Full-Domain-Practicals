// const LazyLoading = () => {
//     return(
//         <h1>Lazy loading component</h1>
//     )
// }

// export default LazyLoading;

/////////////////////////////////////////////////////////////////////////////////////////////////


import { lazy, Suspense, useState } from 'react'

const Component1 = lazy(()=>import('./Component1'))
const Component2 = lazy(()=>import('./Component2'))

const LazyLoading = () => {

    const [data, setData] = useState(false)

    const handleData = () =>{
        setData(p=>(p=='component1'?'component2':'component1'))
    }

  return (
    <div>
        <h3>This is a lazy loading example</h3>

        {data=='component1' && (
            <Suspense fallback = {<h2 style={{color: "red"}}>Component 1 is Loading..</h2>}>
                <Component1/>
            </Suspense>
        )}
        {data=='component2' && (
            <Suspense fallback = {<h2 style={{color: "green"}}>Component 2 is loading..</h2>}>
                <Component2/>
            </Suspense>
        )}

        <button onClick={handleData}>Change component</button>
    </div>
  )
}

export default LazyLoading