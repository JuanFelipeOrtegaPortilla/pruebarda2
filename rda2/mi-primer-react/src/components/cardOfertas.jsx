
import { useState, useEffect } from "react";

function Cardofertas({
    nombre,
    precio,
    disponible,
    stock,
    descuento = 0,
    onTotalChange,
    agregar,
    imagen,
    descripcion
}) {
    const [contador, setContador] = useState(0);

    const precioConDescuento = precio * (1 - descuento / 100);
    const iva = precioConDescuento * 0.15;
    const precioFinal = precioConDescuento + iva;
    const total = precioFinal * contador;

    useEffect(() => {
        if (onTotalChange) {
            onTotalChange(nombre, total);
        }
    }, [contador, nombre, onTotalChange, total]);

    function agregarAlContador() {
        if (disponible && contador < stock) {
            setContador((cantidadActual) => cantidadActual + 1);
        }
    }

    function comprarProducto() {
        if (disponible && agregar) {
            agregar(nombre, precioFinal);
        }
    }

    return (
        <div className="card h-100 shadow-sm border-0 rounded-3">
           

            <div className="card-body">
                <h5 className="card-title fw-bold">{nombre}</h5>

               

                <p className="mb-1">Precio original: ${precio.toFixed(2)}</p>
                <p className="mb-1 text-danger">
                    Descuento: {descuento.toFixed(2)}%
                </p>
                <p className="mb-1">
                    Precio con descuento: ${precioConDescuento.toFixed(2)}
                </p>
                <p className="fw-bold">
                    IVA (15%): ${iva.toFixed(2)}
                </p>
                <p className="fw-bold badge bg-success">
                    Precio final: ${precioFinal.toFixed(2)}
                </p>

                <br />
                <span className={disponible ? "bg-success badge" : "bg-danger badge"}>
                    {disponible ? "Disponible" : "Agotado"}
                </span>

                <div className="d-flex gap-2 mt-3">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={agregarAlContador}
                        disabled={!disponible || contador >= stock}
                    >
                        Agregar
                    </button>

                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={comprarProducto}
                        disabled={!disponible}
                    >
                        Comprar
                    </button>
                </div>

                <h6 className="mt-3 mb-1">Cantidad: {contador}</h6>
                <h5 className="fw-bold">Total: ${total.toFixed(2)}</h5>
            </div>
        </div>
    );
}

export default Cardofertas;
