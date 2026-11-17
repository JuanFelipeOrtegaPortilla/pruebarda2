import { useState, useEffect } from "react";

function CardProducto({ nombre, precio, disponible, stock, onTotalChange, agregar}) {

    const [contador, setContador] = useState(0);
    const [descuento, setDescuento] = useState(1);

    function agregarProducto(){
        console.log("Agregaste:",nombre,precio)
        agregar(nombre,precio);
    }

    let iva = precio * 0.15;
    let total = precio + iva;

    function mostrarProducto() {
        setContador(contador + 1);
    }

    function calcularTotal() {
        return total * contador;
    }

    function calcuarDescuento() {
        return calcularTotal() - (calcularTotal() * (descuento / 100));
    }

    // Total de este producto con cantidad y descuento
    const totalConDescuento = calcuarDescuento();

    // Enviar el total al componente Productos
    useEffect(() => {
        if (onTotalChange) {
            onTotalChange(nombre, totalConDescuento);
        }
    }, [nombre, totalConDescuento, onTotalChange]);

    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">

                <h5 className="card-title badge bg-success">
                    {nombre}
                </h5>

                <p className="card-text">
                    Producto a precio ${precio}.
                </p>

                <p className="mb-1">
                    Precio: ${precio.toFixed(2)}
                </p>

                <p className="fw-bold">
                    IVA: ${iva.toFixed(2)}
                </p>

                <p className="fw-bold badge bg-success">
                    Total: ${total.toFixed(2)}
                </p>

                <br />

                <span className={disponible ? 'bg-success badge' : 'bg-danger badge'}>
                    {disponible ? 'Disponible' : 'Agotado'}
                </span>

                <br />

                <span className={
                    stock > 10
                        ? 'bg-success badge'
                        : stock < 5
                            ? 'bg-danger badge'
                            : 'bg-warning badge text-dark'
                }>
                    {stock > 10 ? 'Disponible' : stock < 5 ? 'Riesgo' : 'Se termina'}
                </span><br></br>

                <button className="btn btn-primary" onClick={mostrarProducto}>
                    Agregar
                </button>

                <button className="btn btn-danger" onClick={agregarProducto}>
                    Comprar
                </button>

                <h3>Cantidad: {contador}</h3>

                <h3 className="fw-bold">
                    Total: ${calcularTotal().toFixed(2)}
                </h3>

                <h6>Descuento</h6>

                <input
                    className="form-control form-control-sm"
                    type="number"
                    min="1"
                    max="100"
                    value={descuento}
                    onChange={(e) => setDescuento(parseInt(e.target.value) || 0)}
                />

                <p>
                    Total con descuento: ${totalConDescuento.toFixed(2)}
                </p>

            </div>
        </div>
    );
}

export default CardProducto;