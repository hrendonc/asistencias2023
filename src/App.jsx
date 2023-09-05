import RegistrarBtn from './components/RegistrarBtn'
import MostrarDatos from './components/MostrarDatos'

function App() {

  const DateTime = new Date()
  let fecha = DateTime.toLocaleString('es-mx', { weekday: "long", year: "numeric", month: "long", day: 'numeric' })

  return (
    <>
      <hgroup>
        <h2>Registro de Asistencia</h2>
        <h3>{fecha}</h3>
      </hgroup>
      <RegistrarBtn />
      <MostrarDatos />
    </>
  )
}

export default App
