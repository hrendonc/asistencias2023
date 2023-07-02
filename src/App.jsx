import { useState } from 'react'
import RegistrarBtn from './components/RegistrarBtn'
import MostrarDatos from './components/MostrarDatos'

function App() {

  const DateTime = new Date()

  return (
    <>
      <h3>{DateTime.toDateString()} - Registro de Asistencias</h3>
      <hr />
      <RegistrarBtn />
      <MostrarDatos />
    </>
  )
}

export default App
