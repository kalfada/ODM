import style from '../style/UpdateEmp.module.css'
import { Link, useParams } from 'react-router-dom'
import CustomInput from './CustomInput'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function UpdateEmp() {
    const { id } = useParams()

    const [formData, setFormData] = useState({ address: '', phone: '', email: '', maritalStatus: '', gender: '' })
    const [updateTxt, setUpdateTxt] = useState(false)

    function getEmp() {
        axios.get(`https://odm-backend.herokuapp.com/users/${id}`)
            .then(res => {
                const { address, phone, email, maritalStatus, gender, name } = res.data
                setFormData({ address, phone, email, maritalStatus, gender, name })
            })
    }

    function submitMe(event) {
        event.preventDefault()
        axios.put(`https://odm-backend.herokuapp.com/users/${id}`, formData)
        setUpdateTxt(true)
    }

    const change = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    useEffect(getEmp, [])

    return (
        <div className={style.update_page}>
            <span><Link className={style.Link} to="/">{`< back`}</Link></span>
            <div className={style.person_name}>{formData.name}</div>
            <div className={style.edit_text}>Edit Details</div>
            <form className={style.form} onSubmit={submitMe}>
                <CustomInput name='Address' text={formData.address} onChangeFn={change} />
                <CustomInput name='Phone' text={formData.phone} onChangeFn={change} />
                <CustomInput name='Email' text={formData.email} onChangeFn={change} />
                <CustomInput name='Marital Status' text={formData.maritalStatus} onChangeFn={change} />
                <CustomInput name='Gender' text={formData.gender} onChangeFn={change} />
                <div className={style.btns}>
                    <input className={`${style.button} ${style.update_btn}`} type="submit" value="Update" />
                    <input type="button" value="Cancel" className={`${style.button} ${style.cancel_btn}`} onClick={getEmp} />
                </div>
                <div className={`${updateTxt ? style.update_text_vis : style.update_text}`}>Details Updated</div>
            </form>
        </div>
    )
}