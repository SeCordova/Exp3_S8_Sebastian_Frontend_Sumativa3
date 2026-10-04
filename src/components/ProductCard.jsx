function ProductCard({ producto, estaEnCarrito, agregarAlCarrito }) {
  return (
    <div className="col-md-6">
      <article className="card tarjeta-juego shadow-sm">
        <img
          src={producto.imagen}
          className="card-img-top imagen-juego"
          alt={producto.nombre}
        />

        <div className="card-body d-flex flex-column">
          <span className="badge text-bg-secondary align-self-start mb-2">
            {producto.categoria}
          </span>

          <h3 className="card-title h5">
            {producto.nombre}
          </h3>

          <p className="card-text">
            {producto.descripcion}
          </p>

          <p className="precio">
            ${producto.precio.toLocaleString('es-CL')}
          </p>

          <button
            className={
              estaEnCarrito
                ? 'btn btn-outline-primary mt-auto'
                : 'btn btn-primary btn-agregar mt-auto'
            }
            onClick={() => agregarAlCarrito(producto)}
          >
            {estaEnCarrito
              ? 'Agregar otra unidad'
              : 'Agregar al carrito'}
          </button>
        </div>
      </article>
    </div>
  )
}

export default ProductCard