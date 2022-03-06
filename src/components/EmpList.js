import style from '../style/EmpList.module.css'
import axios from "axios"
import { useEffect, useState } from "react"
import Emp from "./Emp"
import { useContext } from 'react'
import { EmployeesContext } from './Body'

export default function EmpList() {
    const { chosenEmps } = useContext(EmployeesContext)
    const [empList, setEmpList] = useState([])
    useEffect(() => axios.get('http://localhost:3000/users')
        .then(res => setEmpList(res.data)), [])


    return (
        <div className={style.emplist}>
            {empList.map(emp =>
                <Emp key={emp._id} emp={emp}
                disabled = {chosenEmps.length == 2 && !chosenEmps.find(e => e._id == emp._id)}
                />
            )}
        </div>
    )
}