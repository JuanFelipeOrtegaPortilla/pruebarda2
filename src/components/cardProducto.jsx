import { useState } from "react";

function CardProducto({ nombre, precio, disponible, stock, onAgregar }) {
  const [contador, setContador] = useState(0);
  const [descuento, setDescuento] = useState(1);
  let iva = precio * 0.15;
  let total = precio + iva;

  function mostrarProducto() {
    //alert("Producto: " + nombre)
    setContador(contador + 1);
  }
  function calcularTotal() {
    return contador * total;
  }
  function calcularDescuento() {
    let subtotal = calcularTotal();
    let valorDescuento = subtotal * (descuento / 100);
    return subtotal - valorDescuento;
  }
  function agregarCarrito() {
    onAgregar({
      nombre: nombre,
      precio: Number(precio)
    });
  }

  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-3">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">Precio: ${Number(precio).toFixed(2)}</p>
          <p className="fw-bold"> Iva: ${iva.toFixed(2)}</p>
          <p className="fw-bold badge bg-success">Total: ${total.toFixed(2)}</p> <br></br>
          <p className="fw-bold">
            Stock: <span className="badge bg-warning text-dark">{stock}</span>
          </p>

          <span className={`badge ${disponible ? 'bg-success' : 'bg-secondary'}`}>
            {disponible ? 'Disponible' : 'Agotado'}
          </span>
          <span className={stock > 10 ? 'bg-success badge' : stock < 5 ? 'bg-danger badge' : 'bg-warning badge'} >
            {stock > 10 ? "Disponible" : stock < 5 ? "Riesgo" : "Se termina"}
          </span><br />

          <button
            className="btn btn-success mt-2"
            onClick={agregarCarrito}
            disabled={!disponible || stock <= 0}
          >
            Agregar al carrito
          </button>
          <h3>Numero de vistas: {contador}</h3>
          <p className="fw-bold">El total es: {calcularTotal().toFixed(2)}</p>
          <h4>% Descuento</h4>


          <input
            type="number"
            min="0"
            max="100"
            value={descuento}
            className="form-control form-control-sm"
            onChange={(e) => {
              const valor = Number(e.target.value);
              setDescuento(Math.min(100, Math.max(0, valor)));
            }}
          />

          <p className="fw-bold mt-3">
            El total con descuento es: ${calcularDescuento().toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardProducto;
