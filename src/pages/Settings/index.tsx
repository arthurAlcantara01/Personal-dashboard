
import GeneralPref from "../../Components/GeneralPref"
import type { language, themet } from "../../constants/types"
import styles from "./Settings.module.css"

type props = {
    onPress: (type: "dark" | "light") => void
    typeTheme: string
    typeLang: string
    theme: themet
    language: language 
    onPressLang: (type: string) => void
}

function Settings({onPress, typeTheme, theme, language, onPressLang, typeLang}: props){

    return(
         <div  className={styles.body}>
            <div style={{backgroundColor: theme.backgroundBox} } className={styles.boxUp}></div>
           <h1 style={{color: theme.color}} className={styles.title}>{language.Pages.Settings.title}</h1>
           <GeneralPref language={language} typeLang={typeLang} onPressLang={onPressLang} theme={theme} typeTheme={typeTheme} onPress={onPress}/>
        </div>
    )
}

export default Settings