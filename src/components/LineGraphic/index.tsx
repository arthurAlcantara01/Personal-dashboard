import {Chart as ChartJS,LineElement,PointElement,LinearScale,CategoryScale,Tooltip,Legend} from "chart.js";
import { Line } from "react-chartjs-2";
import type { language, line } from "../../constants/types";
import { useEffect, useState } from "react";
import { useDataContext } from "../../context/dataContext";

ChartJS.register(LineElement,PointElement,LinearScale,CategoryScale,Tooltip,Legend);

type props = {
    language: language 
} 

function LineGraphic({language}: props){
    const {data} = useDataContext()
    const [amountMonths, setAmountMonths] = useState<number[]>()
    const [months, setMonths] = useState<string[]>()

    function soma(data: line[]){
        let sm = 0
        for (const it of data) {
           sm += it.amount
        }
        return sm
    }

    useEffect(()=>{
        const mons: string[] = []
        const monsAmount: number[] = []
        for (let i = 0; i < data.length; i++) {
            const dt = data[i].date.split("/")[1]
            
            if(!mons.includes(dt)){
                mons.push(dt)
            }
        }
        if(mons.length != 0){
            for (const item of mons) {
               const dados = data.filter((key)=> key.date.split("/")[1] == item)
                monsAmount.push(soma(dados))
            }
        }
        setMonths(mons)
        setAmountMonths(monsAmount)
    }, [data])

    const datasets = {
        labels: months,
        datasets: [
            {
            label: language.Components.LineGraphic.label,
            data: amountMonths,
            borderColor: "#4177C8",
            backgroundColor: "rgba(65, 119, 200, 0.2)",
            tension: 0.4,
            fill: true,
            },
        ],
    };

    return(
        <Line data={datasets}/>
    )

}
export default LineGraphic

