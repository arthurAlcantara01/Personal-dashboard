import TableTransactions from "../../components/TableTransactions"
import type { language, themet } from "../../constants/types"
import styles from "./Transactions.module.css"
import { FaPlus } from "react-icons/fa"

type props = {
    theme: themet
    onPress: (type:true | false) => void
    language: language 
}

function Transactions({theme, onPress, language}: props){

    return(
        <div style={{color: theme.color}} className={styles.body}>
            <div style={{backgroundColor: theme.backgroundBox} } className={styles.boxUp}></div>
            <section className={styles.titleAndButton}>        
                <h1 className={styles.title}>{language.Pages.Translation.title}</h1>
                <button style={{backgroundColor: theme.backButton}} onClick={()=> onPress(true)} className={styles.button}>
                    <FaPlus/>
                    <p >{language.Pages.Translation.button}</p>
                </button>
           </section>
           <TableTransactions language={language} theme={theme}/>
        </div>
    )
}

export default Transactions