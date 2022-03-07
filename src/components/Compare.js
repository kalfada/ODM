import { useContext } from 'react'
import SingleEmpCompare from './SingleEmpCompare'
import { EmployeesContext } from './Body'
import style from '../style/Compare.module.css'

export default function Compare() {
    const { chosenEmps } = useContext(EmployeesContext)

    return (
        chosenEmps.length == 2 ?
            <div className={style.compare}>
                <span>
                    So...<br />Who earns the most?
                </span>
                <div className={style.income_compare}>
                    <SingleEmpCompare emp={chosenEmps[0]}  index={0} diff={chosenEmps[0].salary - chosenEmps[1].salary}/>
                    <div className={style.employee}>
                        <div className={`${style.vs} ${style.compare_text}`}>Vs.</div>
                        <hr className={style.hr}/>
                        <div className={`${style.yearly} ${style.compare_text}`}>Yearly Income</div>
                    </div>
                    <SingleEmpCompare emp={chosenEmps[1]} index={1} diff={chosenEmps[1].salary - chosenEmps[0].salary}/>
                </div>
            </div>
            :
            <div className={`${style.compare} ${style.compare_text}`}>
                Pick 2 Employees and see who earns the most
            </div>
    )
}