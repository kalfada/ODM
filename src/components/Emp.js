import style from '../style/Emp.module.css'

export default function Emp(props) {
    const { name } = props

    return (
        <div className={style.emp}>
            <label className={style.container}>{name}
            <input className={style.checkbox} type="checkbox" name="" id="" />
            <span className={style.checkmark}></span>
            </label>
        </div>
    )
}