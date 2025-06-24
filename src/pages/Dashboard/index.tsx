import { useEffect, useState } from "react"
import ValueBox from "../../Components/ValueBox"
import type { language, themet } from "../../constants/types"
import styles from "./Dashboard.module.css"
import { FaWallet } from "react-icons/fa"
import { dataContext } from "../../context/dataContext"
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs"
import GraphicBox from "../../Components/GraphicBox"
import GraphicInLineBox from "../../Components/GraphicInLineBox"

type props = {
    theme: themet
    language: language 
}

function Dashboard({theme, language}: props ){
    const [income, setIncome] = useState(0)
    const [expense, setExpense] = useState(0)
    const [total, setTotal] = useState(0)
    
    const provider = dataContext()

    useEffect(()=>{
        let icm = 0
        let ex = 0 
        for (const item of provider.getData()) {
           if(item.type == "income") {
            icm += item.amount
           }
           else{
            ex += item.amount
           }
        }
        setIncome(icm)
        setExpense(ex)
        setTotal(icm + ex)
    },[provider])

    return(
        <div style={{color: theme.color}} className={styles.body}>
           
            <div style={{backgroundColor: theme.backgroundBox} } className={styles.boxUp}></div>
           <h1 className={styles.title}>{language.Pages.Dashboard.title}</h1>
           <main className={styles.main}>
                <section className={styles.boxValues}>
                    <ValueBox title={language.Pages.Dashboard.totalBalance} value={total} theme={theme} colorIcon={"#505966"} colorBoxIcon={theme.backTotal} Icon={FaWallet}/>
                    <ValueBox title={language.Pages.Dashboard.income} value={income} theme={theme} colorIcon={"#65BA6C"} colorBoxIcon={theme.backIncome} Icon={BsArrowUpRight}/>
                    <ValueBox title={language.Pages.Dashboard.expense} value={expense} theme={theme} colorIcon={"#FB927A"} colorBoxIcon={theme.backExpense} Icon={BsArrowDownRight}/>
                </section>
                <div style={{backgroundColor: theme.backgroundBox, margin: 14}} className={styles.cleanBox}><FaWallet size={30} color={theme.backgroundBox}/></div>
                <section className={styles.graphicBox}>
                    <GraphicBox language={language} theme={theme}/>
                    <GraphicInLineBox language={language} theme={theme}/>
                </section>
           </main>
        </div>
    )
}

export default Dashboard