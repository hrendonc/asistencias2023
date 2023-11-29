// import { useState } from "react"
import { registroGoogleRedirect, registroGooglePopup, registraUsuario, accesoUsuario } from '../js/auth'
import { Button } from 'antd'
import { GoogleOutlined } from '@ant-design/icons'

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
            <h3>Control de Registro de Asistencias</h3>
            <Button onClick={() => registroGooglePopup()} type='primary' size='large' shape='round' icon={<GoogleOutlined /> } >Acceder con cuenta de Google</Button>
        </>
    )
}

export default Auth