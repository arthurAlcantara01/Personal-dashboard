import type { line } from "../constants/types";

let data: line[] = [
  // 🔷 JANEIRO (01)
  { id: 1, date: "02/01/2025", description: "Supermercado", category: "Alimentation", type: "expense", amount: -300 },
  { id: 2, date: "04/01/2025", description: "Conta de Luz", category: "Fixed Bills", type: "expense", amount: -220 },
  { id: 3, date: "06/01/2025", description: "Uber", category: "Others", type: "expense", amount: -50 },
  { id: 4, date: "08/01/2025", description: "Projeto Web", category: "Freelancer", type: "income", amount: 2500 },
  { id: 5, date: "10/01/2025", description: "Renda Extra", category: "Others", type: "income", amount: 300 },
  { id: 6, date: "12/01/2025", description: "Internet", category: "Fixed Bills", type: "expense", amount: -140 },

  // 🔷 FEVEREIRO (02)
  { id: 7, date: "01/02/2025", description: "Padaria", category: "Alimentation", type: "expense", amount: -80 },
  { id: 8, date: "03/02/2025", description: "Aluguel", category: "Fixed Bills", type: "expense", amount: -1300 },
  { id: 9, date: "06/02/2025", description: "Presente", category: "Others", type: "expense", amount: -200 },
  { id: 10, date: "08/02/2025", description: "Consultoria", category: "Freelancer", type: "income", amount: 1800 },
  { id: 11, date: "10/02/2025", description: "Cashback", category: "Others", type: "income", amount: 120 },
  { id: 12, date: "12/02/2025", description: "Telefone", category: "Fixed Bills", type: "expense", amount: -90 },

  // 🔷 MARÇO (03)
  { id: 13, date: "01/03/2025", description: "Restaurante", category: "Alimentation", type: "expense", amount: -150 },
  { id: 14, date: "03/03/2025", description: "Farmácia", category: "Others", type: "expense", amount: -110 },
  { id: 15, date: "05/03/2025", description: "Internet", category: "Fixed Bills", type: "expense", amount: -135 },
  { id: 16, date: "07/03/2025", description: "Spotify", category: "Fixed Bills", type: "expense", amount: -60 },
  { id: 17, date: "10/03/2025", description: "Freelance Mobile App", category: "Freelancer", type: "income", amount: 2200 },
  { id: 18, date: "12/03/2025", description: "Venda Online", category: "Others", type: "income", amount: 350 },

  // 🔷 ABRIL (04)
  { id: 19, date: "01/04/2025", description: "Supermercado", category: "Alimentation", type: "expense", amount: -280 },
  { id: 20, date: "03/04/2025", description: "Conta de Luz", category: "Fixed Bills", type: "expense", amount: -210 },
  { id: 21, date: "05/04/2025", description: "Uber", category: "Others", type: "expense", amount: -60 },
  { id: 22, date: "07/04/2025", description: "Projeto Web", category: "Freelancer", type: "income", amount: 2000 },
  { id: 23, date: "10/04/2025", description: "Renda extra", category: "Others", type: "income", amount: 400 },
  { id: 24, date: "13/04/2025", description: "Internet", category: "Fixed Bills", type: "expense", amount: -150 },
  { id: 25, date: "14/04/2025", description: "Farmácia", category: "Others", type: "expense", amount: -90 },

  // 🔷 MAIO (05)
  { id: 26, date: "01/05/2025", description: "Supermercado", category: "Alimentation", type: "expense", amount: -350 },
  { id: 27, date: "04/05/2025", description: "Aluguel", category: "Fixed Bills", type: "expense", amount: -1250 },
  { id: 28, date: "06/05/2025", description: "Conta de Luz", category: "Fixed Bills", type: "expense", amount: -230 },
  { id: 29, date: "08/05/2025", description: "Uber", category: "Others", type: "expense", amount: -65 },
  { id: 30, date: "10/05/2025", description: "Projeto Web", category: "Freelancer", type: "income", amount: 3200 },
  { id: 31, date: "12/05/2025", description: "Cashback Cartão", category: "Others", type: "income", amount: 150 },

  // 🔷 JUNHO (06)
  { id: 32, date: "01/06/2025", description: "Restaurante", category: "Alimentation", type: "expense", amount: -180 },
  { id: 33, date: "03/06/2025", description: "Farmácia", category: "Others", type: "expense", amount: -120 },
  { id: 34, date: "05/06/2025", description: "Internet", category: "Fixed Bills", type: "expense", amount: -130 },
  { id: 35, date: "07/06/2025", description: "Spotify", category: "Fixed Bills", type: "expense", amount: -55 },
  { id: 36, date: "10/06/2025", description: "Design Gráfico", category: "Freelancer", type: "income", amount: 2400 },
  { id: 37, date: "12/06/2025", description: "Renda Extra", category: "Others", type: "income", amount: 500 },
  { id: 38, date: "15/06/2025", description: "Presente", category: "Others", type: "expense", amount: -200 },
  { id: 39, date: "17/06/2025", description: "Cinema", category: "Others", type: "expense", amount: -85 },
  { id: 40, date: "20/06/2025", description: "Venda de curso", category: "Others", type: "income", amount: 800 }
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
