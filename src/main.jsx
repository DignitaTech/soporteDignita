import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Continuar from './Continuar.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"


function Padre() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<App />}
          errorElement={<h1>Not Found</h1>}
        />
        <Route path="/continuar" element={<Continuar />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Padre />
  </React.StrictMode>,
)
