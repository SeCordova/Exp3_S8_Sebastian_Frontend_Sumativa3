export function obtenerProductos() {
  return fetch(
    `${import.meta.env.BASE_URL}assets/data/productos.json`
  ).then((respuesta) => {
    if (!respuesta.ok) {
      throw new Error('No fue posible cargar los productos')
    }

    return respuesta.json()
  })
}