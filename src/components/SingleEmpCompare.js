import style from '../style/SingleEmpCompare.module.css'

export default function SingleEmpCompare({ emp, index, diff}) {


    return (
        <div>
            <div className={`${style.employee} ${index ? style.second_employee : style.first_employee}`}>
                <div className={style.compare_text}>
                    {emp.name}
                </div>
                <hr className={style.hr} />
                <div className={`${style.compare_text} ${style.diff}`}>
                    ${emp.salary * 12}
                </div>
            </div>
            <div className={style.diff}>
                ${diff * 12} <div className={`${diff > 0 ? style.arrow_up : style.arrow_down}`}></div>
            </div>
        </div>
    )
}