import { useState } from "react";


const Form = (props) => {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [nombre, setNombre] = useState('')
  const [serie, setSerie] = useState('')
  const [mensajeError, setMensajeError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    nombre.trimStart();
    if (nombre.length < 4) {
      setMensajeError('Por favor chequea que la informacion sea correcta')
    } else if (serie.length < 7) {
      setMensajeError('Por favor chequea que la informacion sea correcta')
    } else {
      props.onSubmit({ nombre, serie })
      setNombre('')
      setSerie('')
      setMensajeError('')
    }
  }
          return (
            <div>
              <h1>Elige tu serie favorita</h1>
              <form onSubmit={handleSubmit}>
                <label>
                  Tu nombre:  
                  <input
                    type='text'
                    value={nombre}
                    onChange={(event) => setNombre(event.target.value)}
                  />
                </label>
                <br />
                <label>
                  Serie favorita:  
                  <input
                    type='text'
                    value={serie}
                    onChange={(event) => setSerie(event.target.value)}
                  />
                </label>
                <br />
                <button type='submit'>Enviar</button>
              </form>
              {mensajeError && <p>{mensajeError}</p>}
            </div>
          )
          };      
          
export default Form;