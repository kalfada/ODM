import style from '../style/Body.module.css'
import Compare from './Compare'
import ScrollBox from './ScrollBox'

export default function Body() {
    return (
        <div className={style.body}>
            <ScrollBox />
            <Compare />
        </div>
    )
}