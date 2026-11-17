
import { Link } from 'react-router-dom';

function Encabezado({ titulo }) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">
          {titulo}
        </Link>

        <div className="navbar-nav d-flex flex-row gap-3">
          <Link className="nav-link" to="/">
            Inicio
          </Link>

          <Link className="nav-link" to="/productos">
            Productos
          </Link>

          <Link className="nav-link" to="/contactos">
            Contactos
          </Link>

          <Link className="nav-link" to="/compras">
            Compras
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Encabezado;
