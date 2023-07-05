import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";

const coleccion = 'asistencias'

const addRegistro = async (setReg) => {

    let exit = false
    const info = await readRegistro() // Consultamos todos los registros

    info.map(el => {
        if (el.date == setReg.date) {  // Busca si ya se encuentra un registro con la misma fecha
            exit = true
            return 'Su entrada ya está registrada'
        }
    })

    if (!exit) {
        try {
            const docRef = await addDoc(collection(db, coleccion), setReg)
            console.log('Registro exitoso con id:', docRef.id)
        } catch (error) {
            console.log(error)
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
        console.log(error)
    }
}

const updateRegistro = async (setReg) => {

    let change = null
    const info = await readRegistro() // Consultamos todos los registros

    info.map(el => {
        if (el.date == setReg.date) {
            change = el.id  // Busca si ya se encuentra un registro con la misma fecha
        } 
        if(el.date == setReg.date && el.out) {
            console.log('Ya esta registrada tu salida!')
            return 
        }
    })

    if (change) {  // Si encontro un registro con la misma fecha guarda la hora de salida
        try {
            const dataRef = doc(db, coleccion, change)
            await updateDoc(dataRef, { out: setReg.out })
        } catch (error) {
            console.log(error)
        }
    }else{
        try {
            const docRef = await addDoc(collection(db, coleccion), setReg)
            console.log('Registro exitoso con id:', docRef.id)
        } catch (error) {
            console.log(error)
        }
    }
}

export {
    addRegistro,
    updateRegistro,
    readRegistro
}

