
function Contactos() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        Formulario de Contactos
      </h2>

      <div className="card shadow p-4">
        <form onSubmit={(e) => {
          e.preventDefault();
          alert("Formulario enviado correctamente");
        }}>

          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese su nombre"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              placeholder="Ingrese su correo"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Teléfono</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Ingrese su teléfono"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Mensaje</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Escriba su mensaje"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Enviar
          </button>

        </form>
      </div>
    </div>
  );
}

export default Contactos;
