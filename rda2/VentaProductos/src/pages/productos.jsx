
import { useState } from 'react';
import CardProducto from '../components/cardProducto.jsx';
import SeccionCategoria from '../components/seccionCategoria.jsx';

function Productos() {
  const [nombre, setNombre] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [edad, setEdad] = useState('');

  const [carrito, setCarrito] = useState([]);

  function agregarProducto(producto) {
    setCarrito(anterior => {
      const existente = anterior.find(
        p => p.nombre === producto.nombre
      );

      if (existente) {
        return anterior.map(p =>
          p.nombre === producto.nombre
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        );
      }

      return [
        ...anterior,
        { ...producto, cantidad: 1 }
      ];
    });
  }

  function eliminarProducto(nombreProducto) {
    setCarrito(anterior =>
      anterior.filter(p => p.nombre !== nombreProducto)
    );
  }

  function calcularSubtotal() {
    return carrito.reduce(
      (suma, p) => suma + p.precio * p.cantidad,
      0
    );
  }

  const subtotal = calcularSubtotal();
  const iva = subtotal * 0.15;
  const total = subtotal + iva;

  return (
    <div className="container-fluid mt-4 px-4">

      <h1 className="mb-4">Mi lista de productos</h1>

      <div className="row g-4">

        {/* COLUMNA IZQUIERDA */}
        <div className="col-12 col-lg-8">

          <SeccionCategoria titulo="Bebidas">
            <CardProducto nombre="Agua mineral" precio={1} disponible={true} stock={1} onAgregar={agregarProducto} />
            <CardProducto nombre="Jugo natural" precio={2} disponible={true} stock={5} onAgregar={agregarProducto} />
            <CardProducto nombre="Gaseosa" precio={1.5} disponible={true} stock={11} onAgregar={agregarProducto} />
          </SeccionCategoria>

          <SeccionCategoria titulo="Snacks">
            <CardProducto nombre="Papas" precio={1} disponible={true} stock={5} onAgregar={agregarProducto} />
            <CardProducto nombre="Mani" precio={0.5} disponible={true} stock={10} onAgregar={agregarProducto} />
            <CardProducto nombre="Ruffles" precio={0.65} disponible={true} stock={7} onAgregar={agregarProducto} />
          </SeccionCategoria>

          <SeccionCategoria titulo="Dulces">
            <CardProducto nombre="Gomitas" precio={0.20} disponible={true} stock={6} onAgregar={agregarProducto} />
            <CardProducto nombre="Popetas" precio={1} disponible={true} stock={10} onAgregar={agregarProducto} />
            <CardProducto nombre="Quipitos" precio={0.5} disponible={true} stock={2} onAgregar={agregarProducto} />
          </SeccionCategoria>

        </div>

        {/* COLUMNA DERECHA */}
        <div className="col-12 col-lg-4">

          <div
            className="card shadow rounded-4 border-0 position-sticky"
            style={{ top: '20px' }}
          >
            <div className="card-header bg-primary text-white p-3">
              <h5 className="mb-0">Datos del cliente</h5>
            </div>

            <div className="card-body p-4">

              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                  placeholder="Ingrese su nombre"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Ciudad</label>
                <input
                  type="text"
                  className="form-control"
                  value={ciudad}
                  onChange={e => setCiudad(e.target.value)}
                  placeholder="Ingrese su ciudad"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Edad</label>
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  value={edad}
                  onChange={e => setEdad(e.target.value)}
                  placeholder="Ingrese su edad"
                />
              </div>

              <hr />

              <h5>Productos seleccionados</h5>

              {carrito.length === 0 ? (
                <p className="text-muted">
                  No hay productos agregados.
                </p>
              ) : (
                carrito.map(p => (
                  <div
                    key={p.nombre}
                    className="d-flex justify-content-between align-items-center mb-2"
                  >
                    <div>
                      <strong>{p.nombre}</strong>
                      <small className="d-block text-muted">
                        {p.cantidad} x ${p.precio.toFixed(2)}
                      </small>
                    </div>

                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => eliminarProducto(p.nombre)}
                    >
                      Eliminar
                    </button>
                  </div>
                ))
              )}

              <hr />

              <div className="d-flex justify-content-between">
                <p>Subtotal:</p>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>

              <div className="d-flex justify-content-between">
                <p>IVA (15%):</p>
                <strong>${iva.toFixed(2)}</strong>
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <h5>Total:</h5>
                <h4 className="text-success fw-bold">
                  ${total.toFixed(2)}
                </h4>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Productos;
