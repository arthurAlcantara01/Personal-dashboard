import styles from "./SideBar.module.css"
import { MdDashboard } from "react-icons/md"
import { FiRepeat } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import type { language, themet } from "../../constants/types";


type props = {
    onPress: (screen: "dashboard" | "settings" | "transactions")=> void
    screen: string
    theme: themet    
    language: language
}

function SideBar({onPress, screen, theme, language}:props){
    return(
        <div style={{backgroundColor: theme.backgroundBox, color: theme.color}} className={styles.body}>
            <h1 className={styles.title}>{language.Components.SideBar.title}</h1>
            <div>
                <button onClick={()=> onPress("dashboard")} className={styles.nav}>
                    <MdDashboard size={24}/>
                    <p style={{fontWeight: screen == "dashboard" ? "bold" : ""}}>{language.Components.SideBar.dashboard}</p>
                </button>
                <button onClick={()=> onPress("transactions")} className={styles.nav}>
                    <FiRepeat size={24}/>
                    <p style={{fontWeight: screen == "transactions" ? "bold" : ""}}>{language.Components.SideBar.transaction}</p>
                </button>
                <button onClick={()=> onPress("settings")} className={styles.nav}>
                    <FiSettings size={24}/>
                    <p style={{fontWeight: screen == "settings" ? "bold" : ""}}>{language.Components.SideBar.settings}</p>
                </button>
            </div>
        </div>
    )
}

export default SideBar