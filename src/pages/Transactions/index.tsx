import TableDashBoard from "../../Components/TableDashBoard"
import type { language, themet } from "../../constants/types"
import { dataContext } from "../../context/dataContext"
import styles from "./Transactions.module.css"
import { FaPlus, FaWallet } from "react-icons/fa"

type props = {
    theme: themet
    onPress: (type:true | false) => void
    language: language 
}

function Transactions({theme, onPress, language}: props){

    const data = dataContext().getData()

    return(
        <div style={{color: theme.color}} className={styles.body}>
        <div style={{backgroundColor: theme.backgroundBox, width: "100%"}}><FaWallet size={40} color={theme.backgroundBox}/></div>
            <section className={styles.titleAndButton}>        
                <h1 className={styles.title}>{language.Pages.Translation.title}</h1>
                <button style={{backgroundColor: theme.backButton}} onClick={()=> onPress(true)} className={styles.button}>
                    <FaPlus size={16}/>
                    <p >{language.Pages.Translation.button}</p>
                </button>
           </section>
           <TableDashBoard data={data} language={language} theme={theme}/>
        </div>
    )
}

export default Transactions