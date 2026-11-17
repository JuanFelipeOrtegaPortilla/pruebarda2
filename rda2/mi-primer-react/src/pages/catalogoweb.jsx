
import { useState, useEffect } from "react";
import CardProducto from "../components/cardProducto";

function Catalogo({ agregar }) {

    const [cargado, setCargado] = useState(false);
    const [error, setError] = useState("");
    const [productos, setProductos] = useState([]);
    const [buscar, setBuscar] = useState("");

    useEffect(() => {

        fetch("https://dummyjson.com/products?limit=12")
            .then((respuesta) => {

                if (!respuesta.ok) {
                    throw new Error("Error al cargar productos");
                }

                return respuesta.json();
            })
            .then((datos) => {
                setProductos(datos.products);
                setCargado(true);
            })
            .catch(() => {
                setError("No se cargaron los productos");
                setCargado(false);
            });

    }, []);

    // Buscar productos por nombre
    const productosFiltrados = productos.filter((producto) =>
        producto.title
            .toLowerCase()
            .includes(buscar.toLowerCase())
    );

    if (error !== "") {
        return (
            <div className="alert alert-danger mt-4">
                {error}
            </div>
        );
    }

    return (
        <div
            className="bg-info bg-opacity-10 p-4 min-vh-100"
        >

            {/* ENCABEZADO */}
            <div className="text-center mb-4">

                <h2 className="fw-bold text-primary">
                    Catálogo de Productos
                </h2>

                <p className="text-muted">
                    Explora nuestros productos disponibles
                </p>

            </div>

            {/* BUSCADOR */}
            <div className="row mb-4">

                <div className="col-md-6 mx-auto">

                    <input
                        type="text"
                        className="form-control form-control-lg shadow-sm"
                        placeholder="Buscar producto..."
                        value={buscar}
                        onChange={(e) => setBuscar(e.target.value)}
                    />

                </div>

            </div>

            {/* CARGANDO */}
            {!cargado && (
                <div className="text-center p-5">
                    <div
                        className="spinner-border text-primary"
                        role="status"
                    />
                    <p className="mt-3">
                        Cargando productos...
                    </p>
                </div>
            )}

            {/* PRODUCTOS */}
            {cargado && (
                <>
                    <p className="text-muted">
                        Productos encontrados:
                        <strong> {productosFiltrados.length}</strong>
                    </p>

                    <div className="row g-4">

                        {productosFiltrados.map((producto) => (

                            <div
                                className="col-12 col-md-6 col-lg-4"
                                key={producto.id}
                            >

                                <CardProducto
                                    nombre={producto.title}
                                    precio={producto.price}
                                    disponible={producto.stock > 0}
                                    stock={producto.stock}
                                    imagen={producto.thumbnail}
                                    descripcion={producto.description}
                                    mostrarDescuento={false}
                                    agregar={agregar}
                                />

                            </div>

                        ))}

                    </div>

                    {productosFiltrados.length === 0 && (
                        <div className="alert alert-warning text-center">
                            No se encontraron productos.
                        </div>
                    )}
                </>
            )}

        </div>
    );
}

export default Catalogo;
