
function Contactos() {
    return (
        <div className="container mt-4">
            <div className="card mb-4">
                <div className="card-body p-4">

                    <h2 className="text-center mb-4 text-dark">
                        Contáctanos
                    </h2>

                    <form
                        action="mailto:tucorreo@ejemplo.com"
                        method="POST"
                        encType="text/plain"
                    >
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">
                                Tu Nombre:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="nombre"
                                name="nombre"
                                placeholder="Escribe tu nombre..."
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="mensaje" className="form-label">
                                Escribe tu mensaje:
                            </label>
                            <textarea
                                className="form-control"
                                id="mensaje"
                                name="mensaje"
                                rows="5"
                                placeholder="Escribe aquí..."
                                required
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Enviar mensaje
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Contactos;
