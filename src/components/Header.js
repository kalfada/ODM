import style from '../style/Header.module.css'
import logo from '../logo.png'
import moment from 'moment';

export default function Header() {
    const currentDate = moment().format('MMM D,YYYY,hh:mm:ss A ZZ')
    return(
    <div className={style.header}>
        <img className={style.img} src={logo} />
        <div className={style.date}>{currentDate}</div>
    </div>
    )
}