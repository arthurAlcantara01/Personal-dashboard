import type { themet } from "../../constants/types"
import styles from "./ModalTypeTransaction.module.css"

type props = {
    onPress: (type: "Income" | "Expense") => void
    type: string
    theme: themet
}

function TypeTransaction({onPress, type, theme}: props){
    return(
        <section className={styles.body}>
            <p className={styles.title}>Transaction Type</p>
            <div className={styles.choose}>
                <button style={{borderColor: theme.lineTable}} onClick={()=> onPress("Income")} className={styles.chooseButton}>
                    <div style={{backgroundColor: type == "Income" ? theme.backButton : "", borderColor: theme.backButton}} className={styles.radioButton}></div>
                    <p className={styles.textButton}>Income</p>
                </button>
                <button style={{borderColor: theme.lineTable}} onClick={()=> onPress("Expense")} className={styles.chooseButton}>
                    <div style={{backgroundColor: type == "Expense" ? theme.backButton : "", borderColor: theme.backButton}} className={styles.radioButton}></div>
                    <p className={styles.textButton}>Expense</p>
                </button>
            </div>
        </section>
    )
}
export default TypeTransaction