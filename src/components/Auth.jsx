import { useState } from "react"
import { registroGoogleRedirect, registroGooglePopup, registraUsuario, accesoUsuario } from '../js/auth'

function Auth() {
    // const [email, setEmail] = useState('')
    // const [pass, setPass] = useState('')

    return (
        <>
            {/* <label htmlFor="email">Correo electrónico</label>
            <input type="email" id='email' onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="pass">Contraseña</label>
            <input type="password" id='pass' onChange={(e) => setPass(e.target.value)} />
            <input type="button" onClick={() => accesoUsuario(email, pass)} value="Iniciar Sesión" />
            <input type="button" onClick={() => registraUsuario(email, pass)} value="Registrar" />
            <button onClick={() => registroGoogleRedirect()} >Entrar con google Redirect</button> */}
            <h3>Control de Registros de Asistencia</h3>
            <button onClick={() => registroGooglePopup()} >Acceder con cuenta de Google</button>
        </>
    )
}

export default Auth