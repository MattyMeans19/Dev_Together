import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import App from './App.jsx'
import Register from './Register.jsx'
import Login from './Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path='login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
