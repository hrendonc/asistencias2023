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
          <div><svg onClick={salir} fill="#e1e0e0" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 291.872 291.872" xml:space="preserve" stroke="#e1e0e0" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M291.872,86.586c0-15.564-12.655-28.221-28.221-28.221c-15.563,0-28.221,12.656-28.221,28.221 c0,3.874,0.792,7.567,2.21,10.932c-0.488-0.052-0.977-0.154-1.47-0.154c-0.011,0-0.031,0-0.047,0l-56.437-5.375 c-0.473-0.044-0.966-0.021-1.443,0.058l-29.958,5.302c-8.289,0.272-14.938,7.1-14.938,15.449c0,8.52,6.935,15.455,15.459,15.455 c0.36,0,0.719-0.04,1.074-0.116l29.492-6.029l19.773,2.761c-28.062,25.205-28.54,25.757-28.803,26.061 c-2.246,2.593-3.57,5.826-3.771,9.181c-1.595,3.586-10.901,18.877-19.724,32.794l-37.536,13.081 c-0.381,0.126-0.743,0.304-1.087,0.519c-4.551,2.856-7.273,7.744-7.273,13.088c0,8.514,6.934,15.455,15.459,15.455 c0.995,0,3.625,0,45.793-14.452c1.045-0.353,1.953-1.023,2.604-1.916l23.434-32.127c8.193,7.046,17.849,15.371,21.838,18.814 v32.808c0,8.525,6.934,15.454,15.454,15.454c8.525,0,15.46-6.929,15.46-15.454v-38.289c0-3.459-2.148-7.611-2.81-8.798 c-0.252-0.461-0.572-0.881-0.956-1.244l-27.559-26.818l10.668-10.726l1.432,13.192c0.215,1.979,1.503,3.675,3.344,4.409 c33.365,13.387,34.074,13.387,35.376,13.387c7.281,0,13.213-5.933,13.213-13.218c0-4.558-2.319-8.736-6.383-11.281l-20.389-11.728 l-1.686-17.827c0.688-1.677,1.454-3.31,1.695-3.669c3.623-3.974,4.132-8.483,4.132-12.767c0-0.394-0.089-0.764-0.111-1.147 c3.833,1.953,8.107,3.158,12.693,3.158C279.217,114.807,291.872,102.146,291.872,86.586z"></path> <path d="M130.81,163.228l-16.357,16.358c-2.103,2.104-2.103,5.495,0,7.601c1.047,1.045,2.425,1.574,3.8,1.574 c1.375,0,2.75-0.529,3.801-1.574l25.533-25.532c0.493-0.501,0.892-1.093,1.161-1.75c0.542-1.317,0.542-2.792,0-4.109 c-0.274-0.656-0.667-1.254-1.161-1.747l-24.189-24.19c-2.102-2.102-5.499-2.102-7.601,0c-2.102,2.103-2.102,5.499,0,7.602 l15.013,15.013h-30.699V43.62c0-2.968-2.41-5.375-5.375-5.375H5.376C2.407,38.245,0,40.652,0,43.62v204.633 c0,2.966,2.407,5.374,5.376,5.374h89.365c2.966,0,5.375-2.408,5.375-5.374v-85.025H130.81z"></path> </g> </g> </g></svg> - <span> {user.displayName}</span></div>   
        </div>
      </hgroup>

      <RegistrarBtn user={user} />
      <MostrarDatos user={user} />
    </>
  )

}

export default App
