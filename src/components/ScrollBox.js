import { useContext } from 'react'
import style from '../style/ScrollBox.module.css'
import { EmployeesContext } from './Body'
import EmpList from './EmpList'

export default function ScrollBox() {
    const { chosenEmps, setChosenEmps } = useContext(EmployeesContext)

    return (
        <div className={style.scrollBox}>
            <div className={style.content}>
                <EmpList />
            </div>
        </div>
    )
}