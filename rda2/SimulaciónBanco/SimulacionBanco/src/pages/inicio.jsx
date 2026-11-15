
import { Link } from 'react-router-dom';

function Inicio() {
    return (
        <div className="container mt-4">

          
            <div className="bg-primary text-white text-center p-5 rounded shadow-sm mb-4">

                <h1 className="text-white fw-bold mb-4">
                    Bienvenido al Banco Internacional
                </h1>

                <h4 className="text-white mb-4">
                    Aquí tu dinero siempre estará seguro
                </h4>

                <p className="mb-4">
                    Simula tu préstamo de manera rápida y sencilla.
                    Conoce tus cuotas mensuales y descubre cómo
                    se distribuyen los pagos de tu crédito.
                </p>

                <Link
                    to="/tablaamortizacion"
                    className="btn btn-light btn-lg"
                >
                    Simular Préstamo
                </Link>

            </div>

            <div className="row mb-4">

                <div className="col-md-6 mb-3">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body text-center p-4">

                            <h3 className="text-primary">
                                Simulación de Prestamos
                            </h3>

                            <p>
                                Calcula el valor de tus cuotas
                                mensuales de acuerdo con el monto,
                                la tasa de interés y el plazo
                                seleccionado.
                            </p>

                        </div>
                    </div>
                </div>

                <div className="col-md-6 mb-3">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body text-center p-4">

                            <h3 className="text-primary">
                                Amortizacion Francesa
                            </h3>

                            <p>
                                Consulta una tabla detallada
                                con los intereses, la amortización
                                del capital y el saldo pendiente
                                de cada cuota.
                            </p>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Inicio;
