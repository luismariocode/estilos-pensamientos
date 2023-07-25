import { useState } from 'react'
import './App.css'
import React from "react";

//Pages
import Home from './pages/Home';
import Nombre from './pages/Nombre';
import Correo from  './pages/Correo';
import Survey from './pages/Survey';
import Validacion from './pages/Validacion';
import Thankyou from './pages/Thankyou';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nombre" element={<Nombre />} />
        <Route path="/correo" element={<Correo />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/validacion" element={<Validacion />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="*" element={<h1>Not Found</h1>} />

      </Routes>
    </Router>
  )
}

export default App
