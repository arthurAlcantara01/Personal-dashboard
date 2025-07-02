import type { themet } from "../../constants/types"
import styles from "./ModalItemChoose.module.css"
import { FiChevronDown } from "react-icons/fi";

type props = {
    title: string
    theme: themet
    value: string
    onPress: (type: string)=> void 
    type: string
}

function ModalItemChoose({title, theme, value, onPress, type}: props){
    return(
        <section>
            <p className={styles.title}>{title}</p>
            <div style={{borderColor: theme.lineTable}} className={styles.inputBox}>
               {type == "Income" ? 
                    <select style={{color: theme.color ,backgroundColor: theme.backModal}} className={styles.input} id="Category" value={value} onChange={(e)=> onPress(e.target.value)}>
                        <option value="">Select</option>
                        <option value="Freelancer">Freelancer</option>
                        <option value="Others">Others</option>
                    </select>
                    :
                    <select style={{color: theme.color ,backgroundColor: theme.backModal}} className={styles.input} id="Category" value={value} onChange={(e)=> onPress(e.target.value)}>
                        <option value="">Select</option>
                        <option value="Alimentation">Alimentation</option>
                        <option value="Fixed Bills">Fixed Bills</option>
                        <option value="Others">Others</option>
                    </select>
                    }
               <FiChevronDown size={28} className={styles.arrow}/>
            </div>
        </section>
    )
}

export default ModalItemChoose

