import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Cities } from './components/Cities'
import {Country} from "./components/Contry"
import {Home} from  "./components/Home"
import {Routes , Route} from "react-router-dom"



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/city' element={<Cities/>}></Route>
        <Route path='/country' element={<Country/>}></Route>
      </Routes>
    </div>
  )
}

export default App
