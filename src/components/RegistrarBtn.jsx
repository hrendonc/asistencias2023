import { useState } from "react"
import { addRegistro, updateRegistro } from "../js/crud"

  // Create an instance of Notyf
  var notyf = new Notyf({position: {
    x: 'right',
    y: 'top',
  }});

export default function RegistrarBtn(){

    const DateTime = new Date()

    const [numReg, setNumReg] = useState(0)

    let year = DateTime.getFullYear()
    let month = (DateTime.getMonth()+1) < 10 ? '0'+(DateTime.getMonth()+1) : (DateTime.getMonth()+1)
    let day = DateTime.getDate() < 10 ? '0'+DateTime.getDate() : DateTime.getDate()
    // const date = '2023-07-06'
    const date = year + '-' + month + '-' + day 


    const hour = DateTime.getHours()
    const min = DateTime.getMinutes()
    // const hour = 15
    // const min = 34
    const time = hour +':'+ min


    const checkIn = (e)=>{
        e.preventDefault()
        const setReg = {
            numReg,
            date,
            in: time
        }
        numReg > 0 ? addRegistro(setReg) : notyf.error('Debe introducir un número de registro')
    }

    const CheckOut = (e)=>{
        e.preventDefault()
        const setReg = {
            numReg,
            date,
            out: time
        }
        numReg > 0 ? updateRegistro(setReg) : notyf.error('Debe introducir un número de registro')
        
    }

    if(hour == 8 && (min >= 0 && min <= 30)){
        return (
            <form onSubmit={checkIn}>
                <input type="number" name="number" onChange={e=>setNumReg(e.target.value)} placeholder="Número de registro?"/>
                <button type="submit">Registrar Entrada</button>
            </form>
        )
        //<button onClick={checkIn} type="button">Registrar Entrada</button>
    }

    if((hour ==15 || hour ==16) && (min >= 30 && min <= 59)){
        return (
            <form onSubmit={CheckOut}>
                <input type="number" name="number" onChange={e=>setNumReg(e.target.value)} placeholder="Número de registro?"/>
                <button type="submit">Registrar Salida</button>
            </form>
        )
        // <button onClick={CheckOut} type="button">Registrar Salida</button>
    }

    return <button type="button">Espere su horario de Registro</button>
}