import type { language, themet } from "../../constants/types";
import styles from "./GeneralPref.module.css"
import { FiChevronRight } from "react-icons/fi";

type props = {
    onPress: (type: "dark" | "light") => void
    typeTheme: string,
    typeLang: string
    theme: themet
    language: language 
    onPressLang: (type: string) => void
}

function GeneralPref({onPress, typeTheme, theme, onPressLang, language, typeLang}: props){
    return(
        <div style={{backgroundColor: theme.backgroundBox, color: theme.color}} className={styles.body}>
            <main className={styles.main}>
                <h1 className={styles.title}>{language.Components.GeneralPref.title}</h1>
                <div className={styles.flex}>
                    <p style={{margin: 0}} className={styles.setTheme}>{language.Components.GeneralPref.setTheme}</p>
                    {typeTheme == "dark" ? 
                    <button onClick={()=>onPress("light")} style={{backgroundColor: "#4177C8"}} className={styles.click}>
                        <div style={{right: 0}} className={styles.toggleSwitch}></div>
                    </button>
                    :
                     <button onClick={()=>onPress("dark")} style={{backgroundColor: "#9C9B9B"}} className={styles.click}>
                        <div style={{left: 0}} className={styles.toggleSwitch}></div>
                    </button>}
                </div>
                <div className={styles.flex}>
                    <p>{language.Components.GeneralPref.setLanguage}</p>
                    <div className={styles.boxSelect} style={{display: "flex", alignItems: "center", gap: 6}}>
                        {typeLang == "English" ? 
                        <select value={typeLang} onChange={(e)=> onPressLang(e.target.value)} style={{backgroundColor: theme.backgroundBox}} className={styles.select} name="category" id="category">
                            <option value="English">English</option>
                            <option value="Portuguese">Portuguese</option>
                            <option value="Spanish">Spanish</option>
                        </select>
                        : typeLang == "Portuguese" ? 
                        <select value={typeLang} onChange={(e)=> onPressLang(e.target.value)} style={{backgroundColor: theme.backgroundBox, paddingRight: 30}} className={styles.select} name="category" id="category">
                            <option value="English">Inglês</option>
                            <option value="Portuguese">Português</option>
                            <option value="Spanish">Espanhol</option>
                        </select>
                        :
                        <select value={typeLang} onChange={(e)=> onPressLang(e.target.value)} style={{backgroundColor: theme.backgroundBox, paddingRight: 30}} className={styles.select} name="category" id="category">
                            <option value="English">Inglés</option>
                            <option value="Portuguese">Portugués</option>
                            <option value="Spanish">Espanõl</option>
                        </select>
                        }
                        <FiChevronRight className={styles.arrow} size={24}/>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default GeneralPref