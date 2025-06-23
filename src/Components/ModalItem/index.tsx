import type { themet } from "../../constants/types"
import styles from "./ModalItem.module.css"

type props = {
    title: string
    theme: themet
    value: string
    onPress: (type: string)=> void 
}

function ModalItem({title, theme, value, onPress}: props){
    return(
        <section>
            <p className={styles.title}>{title}</p>
            <div style={{borderColor: theme.lineTable}} className={styles.inputBox}>
                <input type="text" value={value} onChange={(e)=> onPress(e.target.value)} className={styles.input}/>
            </div>
        </section>
    )
}

export default ModalItem