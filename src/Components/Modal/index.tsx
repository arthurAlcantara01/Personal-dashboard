import { FiX } from "react-icons/fi"
import type { language, themet } from "../../constants/types"
import styles from "./Modal.module.css"
import ModalTypeTransaction from "../ModalTypeTransaction"
import { useState } from "react"
import ModalItem from "../ModalItem"
import ModalItemChoose from "../ModalItemChoose"
import { dataContext } from "../../context/dataContext"

type props = {
    theme: themet
    onPress: (type:true | false) => void
    language: language 
}

function Modal({theme, onPress, language}: props){
    const [type, setType] = useState<"Income" | "Expense">("Income")
    const [amount, setAmount] = useState("")
    const [category, setcategory] = useState("")
    const [description, setDescription] = useState("")

    const provider = dataContext()

    function saveTransaction(){
        if(amount == "" || category == "" || description == ""){
            alert("Preencha todos os dados")
            return
        }
        if(!Number.parseInt(amount)){
            alert("Digite um valor númerico")
            return
        }
        const dt = new Date
        provider.addTransaction(
            {
                id: provider.getData().length + 1,
                date: dt.toLocaleDateString(),
                description: description,
                category: category,
                type: type.toLowerCase(),
                amount: type == "Income" ?  Number.parseInt(amount) :  Number.parseInt(amount) * -1,
            }
        )
        onPress(false)
    }

    return(
        <div style={{color: theme.color, backgroundColor: theme.backBoxModal}} className={styles.body}>
            <main style={{backgroundColor: theme.backModal}} className={styles.main}>
                <div className={styles.content}>
                    <section className={styles.sectionTitle}>
                        <h1 className={styles.title}>{language.Components.Modal.title}</h1>
                        <FiX onClick={()=> onPress(false)} size={24}/>
                    </section>
                    <main className={styles.secondMain}>
                        <ModalTypeTransaction language={language} onPress={setType} type={type} theme={theme}/>
                        <ModalItem theme={theme} value={amount} onPress={setAmount} title={language.Components.Modal.amount} />
                        <ModalItemChoose type={type} theme={theme} value={category} onPress={setcategory} title={language.Components.Modal.category} />
                        <ModalItem theme={theme} value={description} onPress={setDescription} title={language.Components.Modal.description} />
                    </main>
                    <footer className={styles.footer}>
                        <button onClick={()=> onPress(false)} className={styles.button}>{language.Components.Modal.cancel}</button>
                        <button onClick={saveTransaction} style={{backgroundColor: theme.backButton, color: "white"}} className={styles.button}>{language.Components.Modal.save}</button>
                    </footer>
                </div>
            </main>
        </div>
    )
}

export default Modal