import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Encabezado from './components/encabezado'
import Pie from './components/pie'
import Inicio from './pages/inicio'
import TablaAmortizacion from './pages/tablaamortizacion'
import Contactos from './pages/contactos'




function App() {

  return (
    <BrowserRouter>
      <main className="container">
        <div div className="container d-flex flex-column min-vh-100">
          <Encabezado titulo="Simulacion Banco"> </Encabezado>
          <Routes>
            <Route path="/inicio" element={<Inicio />}/>
            <Route path="/tablaamortizacion" element={<TablaAmortizacion />}/>
            <Route path="/contactos" element={<Contactos />} />
          </Routes>
        </div>
       
      </main>
      <Pie></Pie>

    </BrowserRouter>



  )
}

export default App
