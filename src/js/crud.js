import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";

const coleccion = 'asistencias'

const addRegistro = async (setRegistro)=>{
    try {
        const docRef = await addDoc(collection(db, coleccion), setRegistro)
        console.log('Registro exitoso con id:', docRef.id)
    } catch (error) {
        console.log(error)
    }
}

const readRegistro = async ()=>{
    const data = []
    try {
        const query = await getDocs(collection(db, coleccion))
        query.forEach(doc=>{
            data.push(doc.data())
        })
        return data
    } catch (error) {
        console.log(error)
    }
}

const updateRegistro = async (time)=>{
    try {
        const dataRef = doc(db, coleccion, "gaMnydX4ooE8DiEOTFO1")
        await updateDoc(dataRef, { out: time })
    } catch (error) {
        console.log(error)
    }
}

export {
    addRegistro,
    updateRegistro,
    readRegistro
}

