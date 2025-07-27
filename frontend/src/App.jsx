import { Routes, Route } from 'react-router-dom';
import './App.css'

// Pages

import { Landing } from './pages/Landing';
import { Searching } from './pages/Searching';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/searching" element={<Searching />} />
      </Routes>
    </>
  )
}

export default App
