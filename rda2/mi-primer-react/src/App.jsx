
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Encabezado from './components/Encabezado.jsx'
import Pie from './components/pie.jsx'
import Inicio from './pages/inicio.jsx'
import Contactos from './pages/contactos.jsx'
import Productos from './pages/productos.jsx'
import Compras from './pages/compras.jsx'
import './App.css'

function App() {
  const [lista, setLista] = useState([])

  function agregar(nombre, precio) {
    const producto = { nombre: nombre, precio: precio }
    setLista([...lista, producto])
  }

  function otraCompra() {
    setLista([])
  }
  function quitarLicores() {
    const licores = ['pilsener', 'club', 'caran'];

    setLista((listaAnterior) =>
      listaAnterior.filter((p) =>
        !licores.includes(p.nombre.trim().toLowerCase())
      )
    );
  }

  return (
    <BrowserRouter>
      <main className="container">
        <section>
          <Encabezado titulo="TIENDA PUCE-IBARRA" />

          <Routes>
            <Route path="/" element={<Inicio />} />

            <Route
              path="/contactos"
              element={<Contactos />}
            />

            <Route
              path="/productos"
              element={<Productos agregar={agregar} />}
            />

            <Route
              path="/compras"
              element={
                <Compras
                  lista={lista}
                  otraCompra={otraCompra}
                  quitarLicores={quitarLicores}
                />
              }
            />
          </Routes>
        </section>

        <section>
          <Pie />
        </section>
      </main>
    </BrowserRouter>
  )
}

export default App
