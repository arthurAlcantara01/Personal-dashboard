import type { language, line, themet } from "../../constants/types";
import styles from "./LineTable.module.css"

type props = {
    line: line
    theme: themet
    language: language
}

function LineTable({line, theme, language}: props){

    return(
        <div style={{backgroundColor: theme.backgroundBox, borderBottomColor: theme.lineTable}} className={styles.headTable}>
            <p className={styles.date}>{line.date}</p>
            <p className={styles.description}>{line.description}</p>
            <p className={styles.cca}>
            {
            line.category == "Alimentation" ? language.Components.LineTable.alimentation 
            : line.category == "Fixed Bills" ? language.Components.LineTable.fixedBills 
            : line.category == "Others" ? language.Components.LineTable.others 
            : language.Components.LineTable.freelancer  
            }
            </p>
            <p className={styles.cca}>
            {
            line.type == "income" ? language.Components.LineTable.income 
            : language.Components.LineTable.expense
            }
            </p>
            <p className={styles.cca}>{line.amount}</p>
        </div>
    )
}

export default LineTable