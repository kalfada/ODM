import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import style from '../style/Emp.module.css'
import { EmployeesContext } from './Body'

export default function Emp(props) {
    const { chosenEmps, setChosenEmps } = useContext(EmployeesContext)
    const navigate = useNavigate()
    const { name, _id } = props.emp

    function addEmp(event) {
        event.target.checked ?
            setChosenEmps([...chosenEmps, props.emp]) :
            setChosenEmps(chosenEmps.filter(e => e._id != _id))
        console.log(chosenEmps);
    }

    function edit() {
        navigate(`/${_id}`)
    }

    return (
        <div className={style.emp}>
            <label className={style.label}>
                <input className={style.checkbox} type="checkbox" onChange={addEmp} />
                {name}
            </label>
            <button className={style.edit_btn} onClick={edit}>edit</button>
        </div>
    )
}