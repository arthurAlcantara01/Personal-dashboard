import type { language, themet } from "../../constants/types"
import styles from "./ModalItemChoose.module.css"
import { FiChevronDown } from "react-icons/fi";

type props = {
    title: string
    theme: themet
    value: string
    onPress: (type: string)=> void 
    type: string
    language: language
}

function ModalItemChoose({title, theme, value, onPress, type, language}: props){
    return(
        <section>
            <p className={styles.title}>{title}</p>
            <div style={{borderColor: theme.lineTable}} className={styles.inputBox}>
               {type == "Income" ? 
                    <select style={{color: theme.color ,backgroundColor: theme.backModal}} className={styles.input} id="Category" value={value} onChange={(e)=> onPress(e.target.value)}>
                        <option value="">{language.Components.ModalItemChoose.select}</option>
                        <option value="Freelancer">{language.Components.ModalItemChoose.freelancer}</option>
                        <option value="Others">{language.Components.ModalItemChoose.others}</option>
                    </select>
                    :
                    <select style={{color: theme.color ,backgroundColor: theme.backModal}} className={styles.input} id="Category" value={value} onChange={(e)=> onPress(e.target.value)}>
                        <option value="">{language.Components.ModalItemChoose.select}</option>
                        <option value="Alimentation">{language.Components.ModalItemChoose.alimentation}</option>
                        <option value="Fixed Bills">{language.Components.ModalItemChoose.fixedBills}</option>
                        <option value="Others">{language.Components.ModalItemChoose.others}</option>
                    </select>
                    }
               <FiChevronDown size={28} className={styles.arrow}/>
            </div>
        </section>
    )
}

export default ModalItemChoose

