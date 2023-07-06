import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";

const coleccion = 'asistencias'

  // Create an instance of Notyf
var notyf = new Notyf({position: {
    x: 'right',
    y: 'top',
  }});


const addRegistro = async (setReg) => {

    let exit = false
    const info = await readRegistro() // Consultamos todos los registros

    info.map(el => {
        if (el.date == setReg.date) {  // Busca si ya se encuentra un registro con la misma fecha
            exit = true            
            notyf.success('Su entrada ya se encuentra registrada!');
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
    let existe  = false
    const info = await readRegistro() // Consultamos todos los registros

    info.map(el => {
        if (el.date == setReg.date) {
            change = el.id  // Busca si ya se encuentra un registro con la misma fecha
        } 
        if(el.date == setReg.date && el.out) {
            existe = true
        }
    })

    if(existe){
        notyf.success('Ya esta registrada tu salida!')
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
    }else{
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

