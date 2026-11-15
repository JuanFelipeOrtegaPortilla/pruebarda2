import { useState } from 'react';

function TablaAmortizacion() {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [monto, setMonto] = useState('');
    const [tasa, setTasa] = useState('');
    const [tiempo, setTiempo] = useState('');
    const [tipoTiempo, setTipoTiempo] = useState('meses');
    const [cuotaMensual, setCuotaMensual] = useState(0);
    const [totalPagado, setTotalPagado] = useState(0);
    const [totalInteres, setTotalInteres] = useState(0);
    const [tabla, setTabla] = useState([]);
    function calculoAmortizacion(monto, tasa, tiempo) {
        let tasaMensual = (tasa / 12) / 100;
        if (tasaMensual === 0) {
            return monto / tiempo;
        }
        let cuota = monto *
            (tasaMensual * Math.pow(1 + tasaMensual, tiempo)) /
            (Math.pow(1 + tasaMensual, tiempo) - 1);

        return cuota;
    }

    function generarTabla() {
        let capital = Number(monto);
        let interesAnual = Number(tasa);
        let plazo = Number(tiempo);

        if (tipoTiempo === 'anios') {
            plazo = plazo * 12;
        }

        if (capital <= 0 || plazo <= 0 || !Number.isInteger(plazo) || interesAnual < 0 ||
            monto === '' || tiempo === '' || tasa === '') {
            alert('Ingrese valores válidos. El plazo debe equivaler a meses completos.');
            return;
        }

        let tasaMensual = interesAnual / 1200;
        capital = Math.round(capital * 100);
        let cuota = Math.round(calculoAmortizacion(capital, interesAnual, plazo));

        let saldo = capital;
        let sumaInteres = 0;
        let sumaPagado = 0;
        let filas = [];

        for (let mes = 1; mes <= plazo; mes++) {
            let saldoInicial = saldo;
            let interes = Math.round(saldoInicial * tasaMensual);
            let amortizacion = cuota - interes;
            let cuotaActual = cuota;

            if (mes === plazo || amortizacion > saldoInicial) {
                amortizacion = saldoInicial;
                cuotaActual = amortizacion + interes;
            }

            saldo = saldoInicial - amortizacion;

            sumaInteres = sumaInteres + interes;
            sumaPagado = sumaPagado + cuotaActual;

            filas.push({
                mes: mes,
                saldoInicial: saldoInicial / 100,
                cuota: cuotaActual / 100,
                interes: interes / 100,
                amortizacion: amortizacion / 100,
                saldoFinal: saldo / 100
            });
        }

        setCuotaMensual(cuota / 100);
        setTotalPagado(sumaPagado / 100);
        setTotalInteres(sumaInteres / 100);
        setTabla(filas);
    }

    function dinero(valor) {
        return Number(valor).toLocaleString('es-EC', {
            style: 'currency',
            currency: 'USD'
        });
    }

    return (
        <section className="container mt-4">

            <h1 className='text-primary' mb-4>Simulación de Tabla de Amortización</h1>
            <h5>
                Sistema de cálculo de préstamo con amortización francesa
            </h5>

            <div className="card mb-4">
                <div className="card-body p-4">
                    <h3 className='text-primary' mb-4>Datos del cliente</h3>

                    <label className="form-label">
                        Nombre del cliente
                    </label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                        placeholder="Ingrese el nombre"
                    />

                    <label className="form-label">Edad</label>
                    <input
                        type="number"
                        min="1"
                        className="form-control"
                        value={edad}
                        onChange={e => setEdad(e.target.value)}
                        placeholder="Ingrese la edad"
                    />
                </div>
            </div>


            <div className="card mb-4">
                <div className="card-body p-4">
                    <h3 className='text-primary'  mb-4>Datos del prestamo</h3>

                    <label className="form-label">
                        Monto solicitado
                    </label>
                    <input
                        type="number"
                        min="0.01"
                        className="form-control mb-3"
                        value={monto}
                        onChange={e => setMonto(e.target.value)}
                        placeholder="Ingrese el monto"
                    />

                    <label className="form-label">Tiempo</label>
                    <input
                        type="number"
                        min="1"
                        className="form-control mb-3"
                        value={tiempo}
                        onChange={e => setTiempo(e.target.value)}
                        placeholder="Ingrese el tiempo"
                    />

                    <label className="form-label">
                        Tipo de tiempo
                    </label>
                    <select
                        className="form-select mb-3"
                        value={tipoTiempo}
                        onChange={e => setTipoTiempo(e.target.value)}
                    >
                        <option value="meses">Meses</option>
                        <option value="anios">Años</option>
                    </select>

                    <label className="form-label">
                        Tasa de interés nominal anual (%)
                    </label>
                    <input
                        type="number"
                        min="0"
                        step="0.01"
                        className="form-control mb-3"
                        value={tasa}
                        onChange={e => setTasa(e.target.value)}
                        placeholder="Ejemplo: 12"
                    />

                    <button
                        className="btn btn-lg btn-outline-primary" onClick={generarTabla}
                    >
                        Calcular
                    </button>
                </div>
            </div>


            <div className="card mb-4">
                <div className="card-body p-4">
                    <h3 className='text-primary mb-4'>Resumen del Préstamo</h3>
                    <div className='row'>
                        <div>
                            <p><strong>Cliente: </strong> {nombre}</p>
                            <p><strong>Monto: </strong>: ${monto}</p>
                            <p><strong>Plazo: </strong>{tiempo} {tipoTiempo}</p>
                            <p><strong>Tasa: </strong>Tasa: {tasa}%</p>
                            <p> <strong>Cuota Mensual:</strong>: ${cuotaMensual.toFixed(2)}</p>
                            <p><strong>Total Pagado:</strong> ${totalPagado.toFixed(2)}</p>
                            <p> <strong>Total interés:</strong> ${totalInteres.toFixed(2)}</p>

                        </div>


                    </div>

                </div>
            </div>


            <div className="card mb-4">
                <div className="card-body">

                    <h3 className="mb-3">Tabla de Amortizacion</h3>

                    <table className="table table-bordered table-striped text-center">
                        <thead className="table-dark">
                            <tr>
                                <th>N°</th>
                                <th>Saldo Inicial</th>
                                <th>Cuota</th>
                                <th>Interés</th>
                                <th>Amortización</th>
                                <th>Saldo Final</th>
                            </tr>
                        </thead>

                        <tbody>
                            {tabla.map((fila) => (
                                <tr key={fila.mes}>
                                    <td>{fila.mes}</td>
                                    <td>{fila.saldoInicial.toFixed(2)}</td>
                                    <td>{fila.cuota.toFixed(2)}</td>
                                    <td>{fila.interes.toFixed(2)}</td>
                                    <td>{fila.amortizacion.toFixed(2)}</td>
                                    <td>{fila.saldoFinal.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </section>
    )
}
export default TablaAmortizacion;
