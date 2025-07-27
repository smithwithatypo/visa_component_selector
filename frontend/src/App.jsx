import { useState } from 'react'
import './App.css'

// Components
import Navbar from './components/navbar/Navbar'
import Search from './components/search/Search'

// Visa components
import { Button } from '@visa/nova-react';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
      </div>

      <Search />
    </>
  )
}

export default App
