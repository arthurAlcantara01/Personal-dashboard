import type { line } from "../constants/types";

let data: line[] = [
  // 🔷 ABRIL (04)
  { id: 1, date: "01/04/2025", description: "Supermercado", category: "Alimentation", type: "expense", amount: -280 },
  { id: 2, date: "03/04/2025", description: "Conta de Luz", category: "Fixed Bills", type: "expense", amount: -210 },
  { id: 3, date: "05/04/2025", description: "Uber", category: "Others", type: "expense", amount: -60 },
  { id: 4, date: "07/04/2025", description: "Projeto Web", category: "Freelancer", type: "income", amount: 2000 },
  { id: 5, date: "10/04/2025", description: "Renda extra", category: "Others", type: "income", amount: 400 },
  { id: 6, date: "13/04/2025", description: "Internet", category: "Fixed Bills", type: "expense", amount: -150 },

  // 🔷 MAIO (05)
  { id: 7, date: "01/05/2025", description: "Supermercado", category: "Alimentation", type: "expense", amount: -350 },
  { id: 8, date: "04/05/2025", description: "Aluguel", category: "Fixed Bills", type: "expense", amount: -1250 },
  { id: 9, date: "06/05/2025", description: "Conta de Luz", category: "Fixed Bills", type: "expense", amount: -230 },
  { id: 10, date: "08/05/2025", description: "Uber", category: "Others", type: "expense", amount: -65 },
  { id: 11, date: "10/05/2025", description: "Projeto Web", category: "Freelancer", type: "income", amount: 3200 },
  { id: 12, date: "12/05/2025", description: "Cashback Cartão", category: "Others", type: "income", amount: 150 },

  // 🔷 JUNHO (06)
  { id: 13, date: "01/06/2025", description: "Restaurante", category: "Alimentation", type: "expense", amount: -180 },
  { id: 14, date: "03/06/2025", description: "Farmácia", category: "Others", type: "expense", amount: -120 },
  { id: 15, date: "05/06/2025", description: "Internet", category: "Fixed Bills", type: "expense", amount: -130 },
  { id: 16, date: "07/06/2025", description: "Spotify", category: "Fixed Bills", type: "expense", amount: -55 },
  { id: 17, date: "10/06/2025", description: "Design Gráfico", category: "Freelancer", type: "income", amount: 2400 },
  { id: 18, date: "12/06/2025", description: "Renda Extra", category: "Others", type: "income", amount: 500 },

  // 🔷 Extras para balancear os meses
  { id: 19, date: "14/04/2025", description: "Farmácia", category: "Others", type: "expense", amount: -90 },
  { id: 20, date: "15/06/2025", description: "Presente", category: "Others", type: "expense", amount: -200 }
];




export function dataContext(){

  function addTransaction(item: line) {
    data.push(item);
  }

  function getData(): line[]{
    return data
  }

  function removeTransaction(id: number){
    data = data.filter((item)=> item.id !== id)
  }

  return{
    addTransaction,
    getData,
    removeTransaction,
  }
}
