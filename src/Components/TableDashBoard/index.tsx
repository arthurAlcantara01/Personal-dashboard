import styles from "./TableDashBoard.module.css"
import LineTable from "../LineTable"
import type { language, line, themet } from "../../constants/types"
import { FaTrash } from "react-icons/fa"

type props = {
    theme: themet
    language: language 
    data: line[]
}

function TableDashBoard({theme, language, data}: props){
  
    return(
        <div style={{color: theme.color }} className={styles.main}>
            <div style={{backgroundColor: theme.backgroundBox, borderBottomColor: theme.lineTable}} className={styles.headTable}>
                <p className={styles.date}>{language.Components.TableDashBoard.date}</p>
                <p className={styles.description}>{language.Components.TableDashBoard.description}</p>
                <p className={styles.cca}>{language.Components.TableDashBoard.category}</p>
                <p className={styles.cca}>{language.Components.TableDashBoard.type}</p>
                <p className={styles.cca}>{language.Components.TableDashBoard.amount}</p>
                <FaTrash size={18} style={{padding: 18}} color={theme.backgroundBox}/>
            </div>
            {
                data.map((item)=>
                        <LineTable language={language} key={item.id} theme={theme} line={item}/>
                )
            }
           
        </div>

    )
}

export default TableDashBoard