import { useState } from 'react'

function Contact() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [mensajeEnviado, setMensajeEnviado] = useState(false)

  function enviarFormulario(evento) {
    evento.preventDefault()

    // Validación básica antes de procesar el formulario.
    if (
      nombre.trim() === '' ||
      correo.trim() === '' ||
      mensaje.trim() === ''
    ) {
      return
    }

    // Simula el procesamiento del formulario.
    setMensajeEnviado(true)

    // Limpia los campos después del envío.
    setNombre('')
    setCorreo('')
    setMensaje('')
  }

  return (
    <section id="contacto" className="container py-5">
      <h2 className="text-center mb-4">
        Contacto
      </h2>

      <form
        className="form-contacto mx-auto"
        onSubmit={enviarFormulario}
      >
        <div className="mb-3">
          <label
            htmlFor="nombre"
            className="form-label"
          >
            Nombre:
          </label>

          <input
            type="text"
            id="nombre"
            className="form-control"
            value={nombre}
            onChange={(evento) =>
              setNombre(evento.target.value)
            }
            required
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="correo"
            className="form-label"
          >
            Correo:
          </label>

          <input
            type="email"
            id="correo"
            className="form-control"
            value={correo}
            onChange={(evento) =>
              setCorreo(evento.target.value)
            }
            required
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="mensaje"
            className="form-label"
          >
            Mensaje:
          </label>

          <textarea
            id="mensaje"
            className="form-control"
            rows="4"
            value={mensaje}
            onChange={(evento) =>
              setMensaje(evento.target.value)
            }
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn boton-principal"
        >
          Enviar
        </button>

        {mensajeEnviado && (
          <div
            className="alert alert-success mt-3 mb-0"
            role="alert"
          >
            Mensaje enviado correctamente.
            Gracias por contactarnos.
          </div>
        )}
      </form>
    </section>
  )
}

export default Contact