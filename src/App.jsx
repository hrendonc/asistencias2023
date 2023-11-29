import RegistrarBtn from './components/RegistrarBtn'
import MostrarDatos from './components/MostrarDatos'
import Auth from './components/Auth.jsx'
import { app } from "./js/firebase"
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'

function App() {

  const [user, setUser] = useState('')
  const auth = getAuth(app);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user)
    });
  },[user])

  const salir = async ()=>{
    await signOut(auth)
    setUser('')
  }

  const DateTime = new Date()
  let fecha = DateTime.toLocaleString('es-mx', { weekday: "long", year: "numeric", month: "long", day: 'numeric' })

  if(!user) return <Auth/>

  return (
    <>
      <hgroup>
        <h2>Registro de Asistencias</h2>
        <h4>{fecha}</h4>
        <div className='grid'>
          <div><span onClick={salir} >[ Salir ]</span> - <span> {user.displayName}</span></div>  
        </div>
      </hgroup>

      <RegistrarBtn user={user} />
      <MostrarDatos user={user} />
    </>
  )

}

export default App
