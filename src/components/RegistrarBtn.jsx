import { addRegistro, updateRegistro } from "../js/crud"

export default function RegistrarBtn(){

    const DateTime = new Date()

    // const date = DateTime.getFullYear() +'-'+ (DateTime.getMonth()+1) +'-'+ DateTime.getDate()
    const date = '2023-7-6'

    // const hour = DateTime.getHours()
    // const min = DateTime.getMinutes()
    const hour = 15
    const min = 33
    const time = hour +':'+ min

    

    const checkIn = ()=>{
        const setReg = {
            date: date,
            in: time
        }
        addRegistro(setReg)
    }

    const CheckOut = async ()=>{
        const setReg = {
            date: date,
            out: time
        }
        updateRegistro(setReg)
    }

    if(hour == 8 && (min >= 0 && min <= 30)){
        return <button onClick={checkIn} type="button">Registrar Entrada</button>
    }

    if((hour ==15 || hour ==16) && (min >= 30 && min <= 59)){
        return <button onClick={CheckOut} type="button">Registrar Salida</button>
    }

    return <button type="button">Espere su horario de Registro</button>
}