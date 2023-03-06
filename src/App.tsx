import { useState } from 'react'
import './App.scss'
import Login from './components/Login'
import Navbar from "./components/Navbar"

console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-white">
      <Navbar/>
      <Login/>
    </div>
  )
}

export default App
