import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, signInWithPopup } from 'firebase/auth'
import { Notyf } from "notyf"
import 'notyf/notyf.min.css'

const coleccion = 'asistencias'

// Notificaciones
let notyf = new Notyf(
    {        
        position: {
            x: 'right',
            y: 'top'
        },
        types: [{
            type: 'warning',
            background: 'orange',
            duration:3000,
            dismissible: true
        }]      
    })

const auth = getAuth();

// Registrar con cuenta de google
const provider = new GoogleAuthProvider()

const registroGoogleRedirect = async () => {
    await signInWithRedirect(auth, provider)
}

const registroGooglePopup = async () => {
    await signInWithPopup(auth, provider)
}

//Registrar con correo y contraseña
const registraUsuario = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            // ..
        });
}

//Acceso con correo y constraseña
const accesoUsuario = async (email, pass)=>{
await signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    })
}

export {
    registroGoogleRedirect,
    registroGooglePopup,
    registraUsuario,
    accesoUsuario
}
