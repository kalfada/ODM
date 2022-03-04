import style from '../style/CustomInput.module.css'

export default function CustomInput({ name, text, onChangeFn }) {
    function textSort(str) {
        const textArr = str.split(' ')
        return textArr.length > 1 ? textArr[0].toLowerCase() + textArr.splice(1).join('') : textArr[0].toLowerCase();
    }

    return (
        <div>
            <span className={style.input_txt}>{name}</span>
            <input className={style.input}
                type="text"
                name={textSort(name)}
                value={text}
                onChange={onChangeFn}
            />
        </div>

    )

}