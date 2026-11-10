
import CardProducto from '../components/cardProducto.jsx';
import SeccionCategoria from '../components/seccionCategoria.jsx';

function Productos() {
  return (
    <div className="container mt-4">

      <h1 className="mb-4">
        Mi lista de productos
      </h1>

      <SeccionCategoria titulo="Bebidas">
        <CardProducto nombre="Agua mineral" precio={1} disponible={true} stock={1} />
        <CardProducto nombre="Jugo natural" precio={2} disponible={true} stock={5} />
        <CardProducto nombre="Gaseosa" precio={1.5} disponible={true} stock={11} />
        <CardProducto nombre="Pepsi" precio={0.5} disponible={true} stock={5} />
      </SeccionCategoria>

      <SeccionCategoria titulo="Snacks">
        <CardProducto nombre="Papas" precio={1} disponible={true} stock={5} />
        <CardProducto nombre="Mani" precio={0.5} disponible={true} stock={10} />
        <CardProducto nombre="Ruffles" precio={0.65} disponible={true} stock={7} />
      </SeccionCategoria>

      <SeccionCategoria titulo="Dulces">
        <CardProducto nombre="Gomitas" precio={0.20} disponible={true} stock={6} />
        <CardProducto nombre="Popetas" precio={1} disponible={true} stock={10} />
        <CardProducto nombre="Quipitos" precio={0.5} disponible={true} stock={2} />
      </SeccionCategoria>

    </div>
  );
}

export default Productos;
