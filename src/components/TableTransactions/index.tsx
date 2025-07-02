import styles from "./TableTransactions.module.css"
import LineTable from "../LineTable"
import type { language, themet } from "../../constants/types"
import { useDataContext } from "../../context/dataContext"

type props = {
    theme: themet
    language: language 
}

function TableTransactions({theme, language,}: props){
  
    const {data} = useDataContext()

    return(
        <div style={{color: theme.color }} className={styles.main}>
            <div style={{backgroundColor: theme.backgroundBox, borderBottomColor: theme.lineTable}} className={styles.headerTable}>
                <p className={styles.date}>{language.Components.TableTransactions.date}</p>
                <p className={styles.description}>{language.Components.TableTransactions.description}</p>
                <p className={styles.cca}>{language.Components.TableTransactions.category}</p>
                <p className={styles.cca}>{language.Components.TableTransactions.type}</p>
                <p className={styles.cca}>{language.Components.TableTransactions.amount}</p>
            </div>
            {
                data.map((item)=>
                        <LineTable language={language} key={item.id} theme={theme} line={item}/>
                )
            }
           
        </div>

    )
}

export default TableTransactions