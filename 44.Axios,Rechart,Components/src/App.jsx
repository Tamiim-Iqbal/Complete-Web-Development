
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import LineChart from './Components/LineChart/LineChart'
import Navbar from './Components/Navbar/NAvbar'
import Phones from './Components/Phones/Phones'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
    {/* <DaisyNav></DaisyNav> */}
    <Navbar></Navbar>
      {/* <h1 className='text-4xl'>Vite + React</h1> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
