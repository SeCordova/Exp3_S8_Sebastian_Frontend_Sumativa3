import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { obtenerProductos } from './services/productService'

function App() {
  // Estados principales de la aplicación.
  const [productos, setProductos] = useState([])

  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem('carrito')

    return carritoGuardado ? JSON.parse(carritoGuardado) : []
  })

  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)
  const [busqueda, setBusqueda] = useState('')
  const [categoriaActual, setCategoriaActual] = useState('todos')

  // Carga los productos desde el archivo JSON.
  function cargarProductos() {
  setCargando(true)
  setError(false)

  obtenerProductos()
    .then((datos) => {
      setProductos(datos)
      setCargando(false)
    })
    .catch((errorCarga) => {
      console.error(
        'Error al cargar productos:',
        errorCarga
      )

      setError(true)
      setCargando(false)
    })
}

  // Carga los productos una vez al iniciar la aplicación.
  useEffect(() => {
    cargarProductos()
  }, [])

  // Guarda el carrito cada vez que cambia.
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])

  function agregarAlCarrito(producto) {
    const productoExistente = carrito.find(
      (item) => item.id === producto.id
    )

    if (productoExistente) {
      const carritoActualizado = carrito.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )

      setCarrito(carritoActualizado)
    } else {
      setCarrito([
        ...carrito,
        {
          ...producto,
          cantidad: 1
        }
      ])
    }
  }

  function quitarDelCarrito(idProducto) {
    setCarrito(
      carrito.filter((producto) => producto.id !== idProducto)
    )
  }

  function aumentarCantidad(idProducto) {
    const carritoActualizado = carrito.map((producto) =>
      producto.id === idProducto
        ? { ...producto, cantidad: producto.cantidad + 1 }
        : producto
    )

    setCarrito(carritoActualizado)
  }

  function disminuirCantidad(idProducto) {
    const carritoActualizado = carrito
      .map((producto) =>
        producto.id === idProducto
          ? { ...producto, cantidad: producto.cantidad - 1 }
          : producto
      )
      .filter((producto) => producto.cantidad > 0)

    setCarrito(carritoActualizado)
  }

  function cambiarCategoria(categoria) {
    setCategoriaActual(categoria)
    setBusqueda('')
  }

  // Filtra productos por categoría y búsqueda.
  const productosFiltrados = productos.filter((producto) => {
    const coincideCategoria =
      categoriaActual === 'todos' ||
      producto.categoria === categoriaActual

    const coincideBusqueda = producto.nombre
      .toLowerCase()
      .includes(busqueda.trim().toLowerCase())

    return coincideCategoria && coincideBusqueda
  })

  // Cuenta la cantidad total de unidades dentro del carrito.
  const cantidadTotalCarrito = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
  )

  return (
    <>
      <Navbar
        categoriaActual={categoriaActual}
        cambiarCategoria={cambiarCategoria}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        cantidadCarrito={cantidadTotalCarrito}
      />

      <header
        id="inicio"
        className="inicio text-center text-white"
      >
        <div className="container py-5">
          <h1 className="display-5 fw-bold">
            Tienda de videojuegos
          </h1>

          <p className="lead mb-0">
            Encuentra juegos para PC, PlayStation, Xbox y Nintendo.
          </p>
        </div>
      </header>

      <main>
        <section id="juegos" className="container my-5">
          <div className="row g-4">

            <div className="col-lg-8">

              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="h3 mb-0">
                  Juegos en top de venta
                </h2>

                {busqueda.trim() !== '' && (
                  <span className="text-muted small">
                    {productosFiltrados.length} resultado(s)
                  </span>
                )}
              </div>

              {cargando && (
                <div className="alert alert-info" role="alert">
                  Cargando catálogo de juegos...
                </div>
              )}

              {error && (
                <div className="alert alert-danger" role="alert">
                  <p className="mb-2">
                    No fue posible cargar el catálogo de juegos.
                  </p>

                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={cargarProductos}
                  >
                    Reintentar
                  </button>
                </div>
              )}

              {!cargando &&
                !error &&
                productosFiltrados.length === 0 && (
                  <p className="text-muted">
                    No se encontraron juegos.
                  </p>
                )}

              <div className="row g-4">
                {productosFiltrados.map((producto) => (
                  <ProductCard
                    key={producto.id}
                    producto={producto}
                    estaEnCarrito={carrito.some(
                      (item) => item.id === producto.id
                    )}
                    agregarAlCarrito={agregarAlCarrito}
                  />
                ))}
              </div>

            </div>

            <Cart
              carrito={carrito}
              quitarDelCarrito={quitarDelCarrito}
              aumentarCantidad={aumentarCantidad}
              disminuirCantidad={disminuirCantidad}
            />

          </div>
        </section>

        <section
          id="ofertas"
          className="ofertas text-center text-white py-4"
        >
          <div className="container">
            <h2 className="h3">
              Oferta de la semana
            </h2>

            <p className="mb-0">
              Hasta 25% de descuento en juegos seleccionados.
            </p>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App