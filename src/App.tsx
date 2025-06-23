import { useEffect, useState } from "react"
import styles from "./App.module.css"
import SideBar from "./Components/SideBar"
import Dashboard from "./pages/Dashboard"
import Transactions from "./pages/Transactions"
import Settings from "./pages/Settings"
import { DarkTheme, LightTheme } from "./constants/ThemeColors"
import Modal from "./Components/Modal"
import { English, Portugues, Spanish } from "./constants/Language"

function App(){
    const [screen, setScreen] = useState<"dashboard" | "transactions" | "settings">("dashboard")
    const [theme, setTheme] = useState(DarkTheme)
    const [language, setLanguage] = useState(English)
    const [typeLanguage, setTypeLanguage] = useState("English")
    const [typeTheme, setTypeTheme] = useState<"dark" | "light">("dark")
    const [showModal, setShowModal] = useState(false)

     useEffect(()=>{
        if(typeLanguage == "English"){
            setLanguage(English)
        }else if(typeLanguage == "Portuguese"){
            setLanguage(Portugues)
        }else
            setLanguage(Spanish)
    },[typeLanguage])

    useEffect(()=>{
        if(typeTheme == "dark"){
            setTheme(DarkTheme)
        }else{
            setTheme(LightTheme)
        }
    },[typeTheme])
    
    return(
        <div style={{backgroundColor: theme.backgroundGeneral}} className={styles.body}>
            <SideBar language={language} theme={theme} onPress={setScreen} screen={screen}/>
           {showModal && <Modal theme={theme} onPress={setShowModal}/>}
            <main className={styles.main}>
                <div className={styles.containerPages}>
                    {screen === "dashboard" && <Dashboard language={language} theme={theme}/>}
                    {screen === "transactions" && <Transactions language={language} theme={theme} onPress={setShowModal}/>}
                    {screen === "settings" && <Settings typeLang={typeLanguage} language={language} onPressLang={setTypeLanguage} theme={theme} typeTheme={typeTheme} onPress={setTypeTheme}/>}
                </div>
            </main>
        </div>
    )
}

export default App