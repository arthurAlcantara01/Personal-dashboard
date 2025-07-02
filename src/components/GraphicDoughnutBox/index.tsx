import { useEffect, useState } from "react"
import type { language, themet } from "../../constants/types"
import DoughnutGraphic from "../DoughnutGraphic"
import styles from "./GraphicDoughnutBox.module.css"
import { useDataContext } from "../../context/dataContext"

type props = {
    theme: themet    
    language: language 
}



function GraphicBox({theme, language}: props){    

    const {data} = useDataContext()
    const dt = data.filter((item)=> item.type == "expense")
    const [expenses, setExpenses] = useState({
            alimentation: 0,
            fixedBills: 0,
            others: 0
        })


    useEffect(()=>{
        const expenseFilter = {
            alimentation: 0,
            fixedBills: 0,
            others: 0
        }
        for (const item of dt) {
            if(item.category.toLowerCase() == "alimentation")
                expenseFilter.alimentation += item.amount
            else if(item.category.toLowerCase() == "fixed bills")
                expenseFilter.fixedBills += item.amount
            else
                expenseFilter.others += item.amount
        }
        setExpenses(expenseFilter)
    }, [data])

    return(
        <div style={{color: theme.color, backgroundColor: theme.backgroundBox}} className={styles.body}>
            <main className={styles.main}>
                <section className={styles.graphicAux}>
                    <p className={styles.title}>{language.Components.GraphicBox.title}</p>

                    <section className={styles.graphicAuxText}>
                        <div className={styles.category}>
                            <div style={{backgroundColor: "#315B9E"}} className={styles.marker}></div>
                            <p className={styles.textCategory}>{language.Components.GraphicBox.alimentation}</p>
                        </div>
                        <div className={styles.category}>
                            <div style={{backgroundColor: "#EE7A61"}} className={styles.marker}></div>
                            <p className={styles.textCategory}>{language.Components.GraphicBox.fixedBills}</p>
                        </div>
                        <div className={styles.category}>
                            <div style={{backgroundColor: "#4177C8"}} className={styles.marker}></div>
                            <p className={styles.textCategory}>{language.Components.GraphicBox.others}</p>
                        </div>
                    </section>
                </section>
                <div className={styles.graphic}>
                    <DoughnutGraphic language={language} dataG={expenses}/>
                </div>
            </main>
        </div>
    )
}

export default GraphicBox