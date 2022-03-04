import { useContext } from 'react'
import style from '../style/Compare.module.css'
import { EmployeesContext } from './Body'

export default function Compare() {
    const { chosenEmps } = useContext(EmployeesContext)

    return (
        chosenEmps.length == 2 ?
            <div className={style.compare}>
                Pick 2 Employees and see who earns the most
            </div>
            :
            <div className={style.compare}>
                <span>
                    So...<br />Who earns the most?
                </span>
                <div className={style.income_compare}>
                    <div className={`${style.first_employee} ${style.employee}`}>Daniel</div>
                    <div className={style.employee}>Vs.</div>
                    <div className={`${style.second_employee} ${style.employee}`}>Shira</div>
                </div>
            </div>
    )
}