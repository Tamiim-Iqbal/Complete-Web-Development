import { useState } from 'react'
import './App.css'
import Watch from './Components/Watch/Watch'
import { useEffect } from 'react'

function App() {

  const [watches, setWatches] = useState([])
  useEffect(() => {
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  },[])

  // const watches = [
  //   {id: 1, name : 'Apple Watch', price : 1000},
  //   {id: 2, name : 'Samsung Watch', price : 900},
  //   {id: 3, name : 'Xiaomi Watch', price : 700},
  //   {id: 4, name : 'Nokia Watch', price : 500},
  // ]
  return (
    <>
      <h1>Modules & Storage</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
