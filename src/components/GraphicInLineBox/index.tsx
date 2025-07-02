import type { language, themet } from "../../constants/types"
import LineGraphic from "../LineGraphic"
import styles from "./GraphicInLineBox.module.css"

type props = {
    theme: themet
    language: language 
}

function GraphicInLineBox({theme, language}: props){
    return(
        <div style={{color: theme.color, backgroundColor: theme.backgroundBox}} className={styles.body}>
            <main className={styles.main}>
                <p className={styles.title}>{language.Components.GraphicInLineBox.title}</p>
                <div className={styles.boxGraphic}>
                    <LineGraphic language={language}/>
                </div>
            </main>
        </div>
    )
}

export default GraphicInLineBox