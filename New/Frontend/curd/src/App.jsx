import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './App.css'

import Register from './component/register';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
                <ToastContainer/>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Register />} />
          <Route path="/" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
