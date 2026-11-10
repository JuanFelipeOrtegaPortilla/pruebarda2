
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Encabezado from './components/Encabezado.jsx';
import Pie from './components/Pie.jsx';

import Inicio from './pages/inicio.jsx';
import Productos from './pages/productos.jsx';
import Contactos from './pages/contactos.jsx';

function App() {
  return (
    <BrowserRouter>
      <main className="min-vh-100 d-flex flex-column">
        <section>
          <Encabezado titulo="Pucesi" />

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/contactos" element={<Contactos />} />
          </Routes>
        </section>

        <section className="mt-auto">
          <Pie />
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
