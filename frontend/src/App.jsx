import React, { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';


import './App.css'

// Pages

import { Landing } from './pages/Landing';
import { Searching } from './pages/Searching';


export const DataContext = createContext();

function App() {
  const [data, setData] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
    <DataContext.Provider value={{ data, setData, searchInput, setSearchInput }}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/searching" element={<Searching />} />
      </Routes>
    </DataContext.Provider>
    </>
  )
}

export default App
