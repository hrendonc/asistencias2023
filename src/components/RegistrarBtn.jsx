import { addRegistro, updateRegistro } from "../js/crud"

export default function RegistrarBtn(){

    const DateTime = new Date()

    const date = DateTime.getFullYear() +'-'+ (DateTime.getMonth()+1) +'-'+ DateTime.getDate()
    const hour = DateTime.getHours()
    const min = DateTime.getMinutes()
    // const hour = 8
    // const min = 12
    const time = hour +':'+ min

    const checkIn = ()=>{
        const setRegistro = {
            date: date,
            in: hour+':'+min,
            out:''
        }
        addRegistro(setRegistro)
    }

    const CheckOut = async ()=>{
        // const setRegistro = {
        //     date: year+'-'+mon+'-'+day,
        //     in: hour+':'+min,
        //     out:''
        // }
        updateRegistro(time)
    }

    if(hour == 8 && (min >= 0 && min <= 30)){
        return <button onClick={checkIn}>Registrar Entrada</button>
    }

    if((hour ==15 || hour ==16) && (min >= 30 && min <= 59)){
        return <button onClick={CheckOut}>Registrar Salida</button>
    }

    return(
        <>
            <button>Espere su horario de Registro</button>
        </>
    )
}