import { useEffect, useState } from "react"

import { db } from "../js/firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function MostrarDatos() {

    let [lista, setLista] = useState([])

    useEffect(() => {
        async function getRegistros() {  // En tiempo real
            onSnapshot(collection(db, 'asistencias'), snapshot => {
                let data = []
                snapshot.docs.forEach(doc => {
                    data.push({ ...doc.data(), id: doc.id })
                })
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
                            <tr key={el.id}>
                                <td>{el.date}</td>
                                <td>{el.in ? el.in : 'Sin registro'}</td>
                                <td>{el.out}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}