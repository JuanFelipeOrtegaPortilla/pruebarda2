
function SeccionCategoria({ titulo, children }) {
  return (
    <section className="mb-5">
      <h3 className="border-bottom pb-2 mb-4">
        {titulo}
      </h3>

      <div className="row">
        {children}
      </div>
    </section>
  );
}

export default SeccionCategoria;
