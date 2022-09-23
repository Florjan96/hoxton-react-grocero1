import { useState } from 'react'
import './App.css'
import { Header } from './assets/components/Header'
import { Main } from './assets/components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   <Header/>

   <Main/>
    </div>
  )
}

export default App
