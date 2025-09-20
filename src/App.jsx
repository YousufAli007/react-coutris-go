import { Suspense } from 'react'
import './App.css'
import Countris from './Countris/Countris'
 
const countrisPromise =fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())
 
function App() {
   

  return (
    <>
       
      <h1>Hello World</h1>
       <Suspense fallback={<h3>Counris is comming....</h3>}>
        <Countris countrisPromise={countrisPromise}></Countris>
       </Suspense>
    </>
  )
}

export default App
