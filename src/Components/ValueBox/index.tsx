import type { themet } from "../../constants/types";
import styles from "./ValueBox.module.css"
import type { IconType } from "react-icons";

type props = {
    title: string;
    value: number;
    Icon: IconType;
    colorIcon: string
    colorBoxIcon: string
    theme: themet
}

function ValueBox({title, value, Icon, colorIcon,colorBoxIcon, theme}: props){
    return(
        <div style={{backgroundColor: theme.backgroundBox, color: theme.color}} className={styles.body}>
            <div className={styles.main}>
                <div style={{backgroundColor: colorBoxIcon}} className={styles.boxIcon}>
                    <Icon size={24} color={colorIcon} className={styles.icon}/>
                </div>
                <div className={styles.boxValue}>
                    <p className={styles.titleValue}>{title}</p>
                    <p className={styles.value}>R$ <span style={{fontWeight: "bold"}}>{value}</span></p>
                </div>
            </div>
        </div>
    )
}

export default ValueBox