
function Encabezado({ titulo }) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">

        <a className="navbar-brand" href="/">
          {titulo}
        </a>

        <div className="navbar-nav d-flex flex-row gap-3">
          <a className="nav-link" href="/">
            Inicio
          </a>

          <a className="nav-link" href="/productos">
            Productos
          </a>

          <a className="nav-link" href="/contactos">
            Contactos
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Encabezado;
