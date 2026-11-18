
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
    esCatalogo = false
}) {

    const [contador, setContador] = useState(0);
    const [descuento, setDescuento] = useState(1);

    function agregarProducto() {
        if (disponible && agregar) {
            agregar(nombre, precio);
        }
    }

    function mostrarProducto() {
        if (disponible && contador < stock) {
            setContador(contador + 1);
        }
    }

    let iva = precio * 0.15;
    let total = precio + iva;

    function calcularTotal() {
        return total * contador;
    }

    function calcularDescuento() {
        return calcularTotal() -
            (calcularTotal() * descuento / 100);
    }

    const totalConDescuento = calcularDescuento();

    useEffect(() => {
        if (onTotalChange) {
            onTotalChange(nombre, totalConDescuento);
        }
    }, [nombre, totalConDescuento, onTotalChange]);

    return (
        <div
            className={
                esCatalogo
                    ? "card h-100 shadow-sm border-0 rounded-3"
                    : "card"
            }
            style={
                esCatalogo
                    ? {}
                    : { width: "18rem" }
            }
        >

            {/* IMAGEN SOLO PARA CATÁLOGO */}
            {esCatalogo && imagen && (
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

            <div className="card-body">

                <h5 className={
                    esCatalogo
                        ? "card-title fw-bold"
                        : "card-title badge bg-success"
                }>
                    {nombre}
                </h5>

                {esCatalogo && descripcion && (
                    <p className="card-text text-muted small">
                        {descripcion}
                    </p>
                )}

                {!esCatalogo && (
                    <p className="card-text">
                        Producto a precio ${precio}.
                    </p>
                )}

                <p className="mb-1">
                    Precio: ${precio.toFixed(2)}
                </p>

                <p className="fw-bold">
                    IVA (15%): ${iva.toFixed(2)}
                </p>

                <p className="fw-bold badge bg-success">
                    Total: ${total.toFixed(2)}
                </p>

                <br />

                <span className={
                    disponible
                        ? "bg-success badge"
                        : "bg-danger badge"
                }>
                    {disponible ? "Disponible" : "Agotado"}
                </span>

                <br />

                <span className={
                    stock > 10
                        ? "bg-success badge"
                        : stock < 5
                            ? "bg-danger badge"
                            : "bg-warning badge text-dark"
                }>
                    {stock > 10
                        ? "Disponible"
                        : stock < 5
                            ? "Riesgo"
                            : "Se termina"}
                </span>

                <br />

                <button
                    className="btn btn-primary"
                    onClick={mostrarProducto}
                    disabled={!disponible || contador >= stock}
                >
                    Agregar
                </button>

                <button
                    className="btn btn-danger"
                    onClick={agregarProducto}
                    disabled={!disponible}
                >
                    Comprar
                </button>

                <h3>Cantidad: {contador}</h3>

                <h3 className="fw-bold">
                    Total: ${calcularTotal().toFixed(2)}
                </h3>

                {/* DESCUENTO SOLO EN PRODUCTOS */}
                {!esCatalogo && (
                    <>
                        <h6>Descuento</h6>

                        <input
                            className="form-control form-control-sm"
                            type="number"
                            min="0"
                            max="100"
                            value={descuento}
                            onChange={(e) =>
                                setDescuento(
                                    Number(e.target.value) || 0
                                )
                            }
                        />

                        <p>
                            Total con descuento:
                            ${totalConDescuento.toFixed(2)}
                        </p>
                    </>
                )}

            </div>
        </div>
    );
}

export default CardProducto;
