function Navbar({ categoriaActual, cambiarCategoria, busqueda, setBusqueda, cantidadCarrito }) {
  function procesarBusqueda(evento) {
    evento.preventDefault()
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark barra-principal">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#inicio">JuegaYA!</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuPrincipal"
          aria-controls="menuPrincipal"
          aria-expanded="false"
          aria-label="Abrir menú de navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menuPrincipal">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${categoriaActual === 'todos' ? 'active' : ''}`}
                onClick={() => cambiarCategoria('todos')}
              >
                Inicio
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${categoriaActual === 'Acción' ? 'active' : ''}`}
                onClick={() => cambiarCategoria('Acción')}
              >
                Acción
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${categoriaActual === 'Simulación' ? 'active' : ''}`}
                onClick={() => cambiarCategoria('Simulación')}
              >
                Simulación
              </button>
            </li>
            <li className="nav-item"><a className="nav-link" href="#ofertas">Ofertas</a></li>
            <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
          </ul>

          <span className="badge bg-light text-dark me-lg-3 mb-2 mb-lg-0">
            Carrito: {cantidadCarrito}
          </span>

          <form className="d-flex" role="search" onSubmit={procesarBusqueda}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar juego"
              aria-label="Buscar juego"
              value={busqueda}
              onChange={(evento) => setBusqueda(evento.target.value)}
            />
            <button className="btn btn-outline-light" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
