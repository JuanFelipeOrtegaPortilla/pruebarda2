import { useEffect, useState } from "react";
import Cardofertas from "../components/cardOfertas";
function Ofertas({ agregar }) {

    const [cargado, setCargado] = useState(false);
    const [error, setError] = useState("");
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=8")
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

    if (error !== "") {
        return (
            <div className="alert alert-danger m-4">
                {error}
            </div>
        );
    }

    return (
        <div className="bg-info bg-opacity-10 p-4 min-vh-100">
            <div className="text-center mb-4">
                <h2 className="fw-bold text-primary">
                    Ofertas
                </h2>
                <p className="text-muted">
                    Aprovecha los descuentos disponibles
                </p>
            </div>

            {!cargado && (
                <div className="text-center p-5">
                    <div className="spinner-border text-primary" role="status" />
                    <p className="mt-3">Cargando ofertas...</p>
                </div>
            )}

            {cargado && (
                <>
                    <p className="text-muted">
                        Productos encontrados:
                        <strong> {productos.length}</strong>
                    </p>

                    <div className="row g-4">
                        {productos.map((producto) => (
                            <div
                                className="col-12 col-md-6 col-lg-4"
                                key={producto.id}
                            >
                                <Cardofertas
                                    nombre={producto.title}
                                    precio={producto.price}
                                    disponible={producto.stock > 0}
                                    stock={producto.stock}
                                    descuento={producto.discountPercentage}
                                    agregar={agregar}
                                    imagen={producto.thumbnail}
                                    descripcion={producto.description}
                                />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
export default Ofertas; 