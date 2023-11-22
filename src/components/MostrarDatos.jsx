import { useEffect, useState } from "react"

import { db } from "../js/firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function MostrarDatos({user}) {

    let [lista, setLista] = useState([])

    const DateTime = new Date()
    let year = DateTime.getFullYear()
    let month = (DateTime.getMonth()+1) < 10 ? '0'+(DateTime.getMonth()+1) : (DateTime.getMonth()+1)
    // const date = '2023-07'
    const mesActual = year + '-' + month

    useEffect(() => {
        async function getRegistros() {  // En tiempo real
            onSnapshot(collection(db, 'asistencias'), snapshot => {
                let data = []
                snapshot.docs.forEach(doc => {
                    data.push({ ...doc.data(), id: doc.id })
                })
                data.sort((x, y) => y.date.localeCompare(x.date))
                setLista(data)
            })
        }
        getRegistros()

    }, [])

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>FECHA</th>
                        <th>ENTRADAS</th>
                        <th>SALIDAS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lista.map(el => (
                            (el.date.substring(7,0) == mesActual) && (el.user == user.email) ? <tr key={el.id}>
                                    <td>{el.date}</td>
                                    <td>{el.in ? el.in : 'Sin registro'}</td>
                                    <td>{el.out ? el.out : 'Sin registro'}</td>
                                </tr> : ''
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}