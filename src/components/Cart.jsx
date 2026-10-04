function Cart({
  carrito,
  quitarDelCarrito,
  aumentarCantidad,
  disminuirCantidad
}) {
  const total = carrito.reduce(
    (acumulado, producto) =>
      acumulado + producto.precio * producto.cantidad,
    0
  )

  const cantidadTotal = carrito.reduce(
    (acumulado, producto) =>
      acumulado + producto.cantidad,
    0
  )

  return (
    <aside className="col-lg-4">
      <div className="card shadow-sm carrito">
        <div className="card-body">

          <div className="d-flex justify-content-between align-items-center mb-2">
            <h2 className="h4 mb-0">Carrito de compras</h2>

            <span className="badge text-bg-primary">
              {cantidadTotal}
            </span>
          </div>

          {/* Mensaje condicional cuando todavía no hay productos */}
          {carrito.length === 0 ? (
            <p className="text-muted">
              Todavía no has agregado juegos.
            </p>
          ) : (
            <ul className="list-group list-group-flush mb-3">

              {carrito.map((producto) => (
                <li
                  key={producto.id}
                  className="list-group-item px-0"
                >
                  <div className="d-flex justify-content-between align-items-start gap-2">

                    <div>
                      <div className="fw-semibold">
                        {producto.nombre}
                      </div>

                      <small className="text-muted">
                        ${producto.precio.toLocaleString('es-CL')} c/u
                      </small>
                    </div>

                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() =>
                        quitarDelCarrito(producto.id)
                      }
                    >
                      Eliminar
                    </button>

                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-2">

                    <div className="btn-group btn-group-sm">

                      <button
                        className="btn btn-outline-secondary"
                        onClick={() =>
                          disminuirCantidad(producto.id)
                        }
                      >
                        -
                      </button>

                      <span className="btn btn-light disabled">
                        {producto.cantidad}
                      </span>

                      <button
                        className="btn btn-outline-secondary"
                        onClick={() =>
                          aumentarCantidad(producto.id)
                        }
                      >
                        +
                      </button>

                    </div>

                    <span className="fw-semibold">
                      $
                      {(
                        producto.precio *
                        producto.cantidad
                      ).toLocaleString('es-CL')}
                    </span>

                  </div>
                </li>
              ))}

            </ul>
          )}

          <div className="d-flex justify-content-between fw-bold border-top pt-3">
            <span>Total:</span>

            <span>
              ${total.toLocaleString('es-CL')}
            </span>
          </div>

        </div>
      </div>
    </aside>
  )
}

export default Cart