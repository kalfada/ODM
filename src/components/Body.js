import { createContext, useState } from 'react'
import style from '../style/Body.module.css'
import Compare from './Compare'
import ScrollBox from './ScrollBox'

export const EmployeesContext = createContext()

export default function Body() {

    const [chosenEmps, setChosenEmps] = useState([])

    return (
        <div className={style.body}>
            <EmployeesContext.Provider value={{ chosenEmps, setChosenEmps }} >
                <ScrollBox />
                <Compare />
            </EmployeesContext.Provider>
        </div>
    )
}