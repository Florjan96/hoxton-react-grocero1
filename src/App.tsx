import { useState } from 'react'
import './App.css'
import { Header } from './assets/components/Header'
import { Main } from './assets/components/Main'
import state from './data/State'

function App() {
  const [items, setitems] = useState(state)

  return (
    <div className="App">
   <Header/>

   <Main/>
    </div>
  )
}

export default App
