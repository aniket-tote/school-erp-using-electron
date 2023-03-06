import nodeLogo from "./assets/node.svg"
import { useState } from 'react'
import './App.scss'

console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="text-yellow-500">Electron + Vite + React</h1>
    </div>
  )
}

export default App
