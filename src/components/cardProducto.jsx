
function CardProducto({ nombre, precio, disponible, stock }) {
  let iva = precio * 0.15;
  let total = precio + iva;
  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-3">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">Precio: ${Number(precio).toFixed(2)}</p>
          <p className="fw-bold"> Iva: ${iva.toFixed(2)}</p>
          <p className="fw-bold badge bg-success">Total: ${total.toFixed(2)}</p> <br></br>
          <p className="fw-bold" badge bg-warning>stock: {stock}</p>

          <span className={`badge ${disponible ? 'bg-success' : 'bg-secondary'}`}>
            {disponible ? 'Disponible' : 'Agotado'}
          </span>
          <span className={stock > 10 ? 'bg-success badge' : stock < 5 ? 'bg-danger badge' : 'bg-warning badge'} >
            {stock > 10 ? "Disponible" : stock < 5 ? "Riesgo" : "Se termina"}
          </span>
          
        </div>
      </div>
    </div>
  );
}

export default CardProducto;
