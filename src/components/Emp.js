import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { EmployeesContext } from './Body'
import style from '../style/Emp.module.css'

export default function Emp(props) {
    const { chosenEmps, setChosenEmps } = useContext(EmployeesContext)
    const navigate = useNavigate()
    const { disabled } = props
    const { name, _id } = props.emp

    function addEmp(event) {
        event.target.checked ?
            setChosenEmps([...chosenEmps, props.emp]) :
            setChosenEmps(chosenEmps.filter(e => e._id != _id))
    }

    function edit() {
        navigate(`/edit/${_id}`)
    }

    return (
        <div className={style.emp}>
            <label className={disabled ? `${style.label} ${style.disabled}` : style.label}>
                <input className={style.checkbox} type="checkbox" onChange={addEmp} disabled={disabled} />
                {name}
            </label>
            
            <button className={style.edit_btn} onClick={edit}><FontAwesomeIcon className={style.svg} icon={faPen} />Edit</button>
        </div>
    )
}