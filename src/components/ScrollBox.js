import style from '../style/ScrollBox.module.css'
import EmpList from './EmpList'

export default function ScrollBox() {
    return(
        <div className={style.scrollBox}>
            <div className={style.content}>
                <EmpList />
            </div>
        </div>
        )
}