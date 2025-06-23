import { Doughnut } from "react-chartjs-2"
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js"
import type { language } from "../../constants/types"

ChartJS.register(ArcElement, Legend, Tooltip)

type expenseFilter = {
    alimentation: number,
    fixedBills: number,
    others: number
}

type props = {
    dataG: expenseFilter
    language: language 
}

function DoughnutGraphic({dataG, language}: props){

    const doughnutData = {
        datasets: [{
            label: language.Components.DoughnutGraphic.label,
            data: [dataG.alimentation * -1, dataG.fixedBills * -1, dataG.others * -1],
            backgroundColor: ["#315B9E", "#EE7A61", "#4177C8"],
            hoverOffset: 4,
            borderWidth: 0
  }]
    }

    return(
            <Doughnut data={doughnutData} />
    )
}

export default DoughnutGraphic