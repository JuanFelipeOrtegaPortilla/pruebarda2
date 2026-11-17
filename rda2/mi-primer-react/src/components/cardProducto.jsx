
import { useState, useEffect } from "react";

function CardProducto({
    nombre,
    precio,
    disponible,
    stock,
    onTotalChange,
    agregar,
    imagen,
    descripcion,
    mostrarDescuento = true
}) {

    const [contador, setContador] = useState(0);
    const [descuento, setDescuento] = useState(1);

    let iva = precio * 0.15;
    let total = precio + iva;

    function mostrarProducto() {
        if (disponible && contador < stock) {
            setContador(contador + 1);
        }
    }

    function agregarProducto() {
        if (disponible && typeof agregar === "function") {
            agregar(nombre, precio);
        }
    }

    function calcularTotal() {
        return total * contador;
    }

    function calcularDescuento() {
        return calcularTotal() -
            (calcularTotal() * (descuento / 100));
    }

    const totalConDescuento = calcularDescuento();

    useEffect(() => {
        if (onTotalChange) {
            onTotalChange(nombre, totalConDescuento);
        }
    }, [nombre, totalConDescuento, onTotalChange]);

    return (
        <div className="card h-100 shadow-sm border-0 rounded-3">

            {/* IMAGEN */}
            {imagen && (
                <div className="bg-light text-center p-3">
                    <img
                        src={imagen}
                        alt={nombre}
                        className="img-fluid"
                        style={{
                            height: "180px",
                            width: "100%",
                            objectFit: "contain"
                        }}
                    />
                </div>
            )}

            <div className="card-body d-flex flex-column">

                {/* NOMBRE */}
                <h5 className="card-title fw-bold">
                    {nombre}
                </h5>

                {/* DESCRIPCIÓN */}
                {descripcion && (
                    <p className="card-text text-muted small">
                        {descripcion}
                    </p>
                )}

                {/* PRECIOS */}
                <div className="mb-3">

                    <p className="mb-1">
                        Precio:
                        <strong className="text-primary">
                            {" "}${precio.toFixed(2)}
                        </strong>
                    </p>

                    <p className="mb-1">
                        IVA (15%): ${iva.toFixed(2)}
                    </p>

                    <h5 className="text-success fw-bold">
                        Total: ${total.toFixed(2)}
                    </h5>

                </div>

                {/* DISPONIBILIDAD */}
                <div className="mb-3">

                    <span className={
                        disponible
                            ? "badge bg-success me-2"
                            : "badge bg-danger me-2"
                    }>
                        {disponible ? "Disponible" : "Agotado"}
                    </span>

                    <span className={
                        stock > 10
                            ? "badge bg-success"
                            : stock < 5
                                ? "badge bg-danger"
                                : "badge bg-warning text-dark"
                    }>
                        Stock: {stock}
                    </span>

                </div>

                {/* BOTONES */}
                <div className="d-flex gap-2 mb-3 mt-auto">

                    <button
                        className="btn btn-primary flex-fill"
                        onClick={mostrarProducto}
                        disabled={!disponible || contador >= stock}
                    >
                        Agregar
                    </button>

                    <button
                        className="btn btn-danger flex-fill"
                        onClick={agregarProducto}
                        disabled={!disponible}
                    >
                        Comprar
                    </button>

                </div>

                {/* CANTIDAD */}
                <div className="bg-light rounded p-3">

                    <p className="mb-1">
                        Cantidad seleccionada:
                        <strong> {contador}</strong>
                    </p>

                    <h5 className="fw-bold mb-0">
                        Total: ${calcularTotal().toFixed(2)}
                    </h5>

                </div>

                {/* DESCUENTO OPCIONAL */}
                {mostrarDescuento && (
                    <div className="mt-3">

                        <h6>Descuento (%)</h6>

                        <input
                            className="form-control form-control-sm"
                            type="number"
                            min="0"
                            max="100"
                            value={descuento}
                            onChange={(e) =>
                                setDescuento(
                                    Math.min(
                                        100,
                                        Math.max(0, Number(e.target.value))
                                    )
                                )
                            }
                        />

                        <p className="mt-2 mb-0">
                            Total con descuento:
                            <strong>
                                {" "}${totalConDescuento.toFixed(2)}
                            </strong>
                        </p>

                    </div>
                )}

            </div>
        </div>
    );
}

export default CardProducto;
