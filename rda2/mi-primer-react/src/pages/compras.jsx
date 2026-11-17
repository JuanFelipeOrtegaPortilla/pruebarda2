
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Compras({ lista, otraCompra, quitarLicores }) {

    const navigate = useNavigate();

    // Datos del cliente
    const [nombre, setNombre] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [edad, setEdad] = useState('');
    const [genero, setGenero] = useState('');

    // Controlar factura
    const [factura, setFactura] = useState(false);

    // Lista de licores
    const licores = ['pilsener', 'club', 'caran'];

    // Verificar edad
    let menorEdad = edad !== '' && Number(edad) < 18;
    let adultoMayor = edad !== '' && Number(edad) > 65;

    let subtotal = 0;
    let subtotalLicores = 0;
    let iva = 0;
    let ice = 0;
    let total = 0;
    let porcentajeIVA = 0;

    // Calcular subtotal y detectar licores
    lista.forEach((p) => {
        subtotal += p.precio;

        const nombreProducto = p.nombre.trim().toLowerCase();

        if (licores.includes(nombreProducto)) {
            subtotalLicores += p.precio;
        }
    });

    // Calcular IVA según la edad
    // Calcular IVA según la edad
    // Calcular IVA según la edad
if (edad !== '') {
    if (menorEdad) {
        porcentajeIVA = 0;
    } else if (adultoMayor) {
        porcentajeIVA = 0.08;
    } else {
        porcentajeIVA = 0.15;
    }
}

// Calcular impuestos
iva = subtotal * porcentajeIVA;
ice = edad !== '' && !menorEdad
    ? subtotalLicores * 0.19
    : 0;

total = subtotal + iva + ice;

    // Validar compra de licores
    let compraProhibida = menorEdad && subtotalLicores > 0;

    // Generar factura
    function generarFactura(e) {
        e.preventDefault();

        if (compraProhibida || lista.length === 0) {
            return;
        }

        setFactura(true);
    }

    // Eliminar licores
    function eliminarLicores() {
        quitarLicores();
        setFactura(false);
    }

    // Nueva compra
    function nuevaCompra() {
        otraCompra();
        setFactura(false);
        setNombre('');
        setCiudad('');
        setEdad('');
        setGenero('');

        navigate('/productos');
    }

    return (
        <div className="container mt-4 mb-5">

            <h2 className="text-center text-primary mb-4">
                Carrito de Compras
            </h2>

            <div className="row g-4">

                {/* PRODUCTOS */}
                <div className="col-md-6">

                    <div className="card shadow-sm p-4 h-100">

                        <h4>Mis Productos Seleccionados</h4>

                        <p>
                            Total de productos: {lista.length}
                        </p>

                        <ul className="list-group mb-4">

                            {lista.map((producto, i) => (
                                <li
                                    key={i}
                                    className="list-group-item d-flex justify-content-between"
                                >
                                    <span>{producto.nombre}</span>

                                    <span>
                                        ${producto.precio.toFixed(2)}
                                    </span>
                                </li>
                            ))}

                        </ul>

                        <h4>Valores de la Compra</h4>

                        <ul className="list-group">

                            <li className="list-group-item">
                                Subtotal: ${subtotal.toFixed(2)}
                            </li>

                            <li className="list-group-item">
                                IVA ({(porcentajeIVA * 100).toFixed(0)}%):
                                ${iva.toFixed(2)}
                            </li>

                            <li className="list-group-item">
                                ICE (19%): ${ice.toFixed(2)}
                            </li>

                            <li className="list-group-item bg-success text-white">
                                <strong>
                                    Total: ${total.toFixed(2)}
                                </strong>
                            </li>

                        </ul>

                        {/* ADVERTENCIA DE LICORES */}
                        {compraProhibida && (
                            <div className="alert alert-danger mt-3">

                                <h5>Compra no permitida</h5>

                                <p>
                                    Los menores de 18 años no pueden
                                    comprar bebidas alcohólicas.
                                </p>

                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={eliminarLicores}
                                >
                                    Quitar licores
                                </button>

                            </div>
                        )}

                    </div>
                </div>

                {/* DATOS DEL CLIENTE */}
                <div className="col-md-6">

                    <div className="card shadow-sm p-4">

                        <h4 className="mb-3">
                            Datos del Cliente
                        </h4>

                        <form onSubmit={generarFactura}>

                            <div className="mb-3">
                                <label className="form-label">
                                    Nombre completo
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={nombre}
                                    onChange={(e) => {
                                        setNombre(e.target.value);
                                        setFactura(false);
                                    }}
                                    placeholder="Ingrese su nombre"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Ciudad
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={ciudad}
                                    onChange={(e) => {
                                        setCiudad(e.target.value);
                                        setFactura(false);
                                    }}
                                    placeholder="Ingrese su ciudad"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Edad
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    value={edad}
                                    onChange={(e) => {
                                        setEdad(e.target.value);
                                        setFactura(false);
                                    }}
                                    min="1"
                                    max="120"
                                    step="1"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Género
                                </label>

                                <select
                                    className="form-select"
                                    value={genero}
                                    onChange={(e) => {
                                        setGenero(e.target.value);
                                        setFactura(false);
                                    }}
                                    required
                                >
                                    <option value="">
                                        Seleccione una opción
                                    </option>

                                    <option value="Masculino">
                                        Masculino
                                    </option>

                                    <option value="Femenino">
                                        Femenino
                                    </option>

                                    <option value="Otro">
                                        Otro
                                    </option>

                                    <option value="Prefiero no indicar">
                                        Prefiero no indicar
                                    </option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-success w-100"
                                disabled={
                                    lista.length === 0 ||
                                    compraProhibida
                                }
                            >
                                Generar factura
                            </button>

                        </form>

                    </div>
                </div>

            </div>

            {/* FACTURA GENERADA */}
            {factura && !compraProhibida && (

                <div className="card shadow mt-4 p-4">

                    <h3 className="text-center text-primary">
                        FACTURA DE COMPRA
                    </h3>

                    <hr />

                    <h5>Datos del Cliente</h5>

                    <p><strong>Nombre:</strong> {nombre}</p>
                    <p><strong>Ciudad:</strong> {ciudad}</p>
                    <p><strong>Edad:</strong> {edad}</p>
                    <p><strong>Género:</strong> {genero}</p>

                    <hr />

                    <h5>Detalle de Productos</h5>

                    <div className="table-responsive">

                        <table className="table table-bordered">

                            <thead className="table-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>

                            <tbody>
                                {lista.map((producto, i) => (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{producto.nombre}</td>
                                        <td>
                                            ${producto.precio.toFixed(2)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>

                    </div>

                    <div className="text-end">

                        <p>
                            Subtotal: ${subtotal.toFixed(2)}
                        </p>

                        <p>
                            IVA ({(porcentajeIVA * 100).toFixed(0)}%):
                            ${iva.toFixed(2)}
                        </p>

                        <p>
                            ICE (19%): ${ice.toFixed(2)}
                        </p>

                        <h4 className="text-success">
                            Total: ${total.toFixed(2)}
                        </h4>

                    </div>

                    <div className="text-center mt-4">

                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={nuevaCompra}
                        >
                            Otra compra
                        </button>

                    </div>

                </div>
            )}

        </div>
    );
}

export default Compras;
