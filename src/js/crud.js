import { db } from "./firebase"
import { collection, addDoc, getDocs } from "firebase/firestore"
import { doc, updateDoc } from "firebase/firestore"

import { Notyf } from "notyf"
import 'notyf/notyf.min.css'

const coleccion = 'asistencias'

// Notificaciones
var notyf = new Notyf(
    {
        position: {
            x: 'right',
            y: 'top'
        },
        types: [{
            type: 'warning',
            background: 'orange',
            duration: 3000,
            dismissible: true
        }]
    })

const addRegistro = async (setReg) => {

    let exit = false
    const info = await readRegistro() // Consultamos todos los registros

    info.map(el => {
        if (el.date == setReg.date) {  // Busca si ya se encuentra un registro con la misma fecha
            exit = true
            notyf.open({
                type: 'warning',
                message: 'Su entrada <strong>ya</strong> se encuentra registrada!'
            })
            return
        }
    })

    if (!exit) {
        try {
            const docRef = await addDoc(collection(db, coleccion), setReg)
            notyf.success('Su entrada se registró con exito');
        } catch (error) {
            notyf.error(error)
        }
    }
}

const readRegistro = async () => {
    const data = []
    try {
        const query = await getDocs(collection(db, coleccion))
        query.forEach(doc => {
            data.push({ ...doc.data(), 'id': doc.id })
        })
        return data
    } catch (error) {
        notyf.error(error)
    }
}

const updateRegistro = async (setReg) => {

    let change = null
    let existe = false
    const info = await readRegistro() // Consultamos todos los registros

    info.map(el => {
        if (el.date == setReg.date) {
            change = el.id  // Busca si ya se encuentra un registro con la misma fecha
        }
        if (el.date == setReg.date && el.out) {
            existe = true
        }
    })

    if (existe) {
        notyf.open({
            type: 'warning',
            message: 'Su <strong>salida</strong> ya se encuentra registrada!'
        })
        return
    }

    if (change) {  // Si encontro un registro con la misma fecha guarda la hora de salida
        try {
            const dataRef = doc(db, coleccion, change)
            await updateDoc(dataRef, { out: setReg.out })
            notyf.success('Se registró tu salida exitosamente')
        } catch (error) {
            notyf.error(error)
        }
    } else { //Si no registro entrada, registra la salida omitiendo la entrada
        try {
            const docRef = await addDoc(collection(db, coleccion), setReg)
            notyf.success('Se registró tu salida exitosamente')
        } catch (error) {
            notyf.error(error)
        }
    }
}

export {
    addRegistro,
    updateRegistro,
    readRegistro
}

