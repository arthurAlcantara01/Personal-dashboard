import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import type { line } from "../constants/types";
import { db } from "../lib/firebase";
import { createContext, useContext, useEffect, useState } from "react";


type PropsContext = {
  data: line[],
  addTransaction: (item: line) => Promise<void>
  removeTransaction: (id: string) => Promise<void>
}

const DataContext = createContext<PropsContext | null>(null)

export function useDataContext(){
  const context = useContext(DataContext)
  if (!context) {
    throw new Error("useDataContext deve ser usado dentro de um DataProvider")
  }
  return context
}

export function DataProvider ({children}: {children : React.ReactNode}){
  const [data, setData] = useState<line[]>([])

  useEffect(()=>{
      async function getInitial() {
      
      const dataQuery = await getDocs(collection(db, "transaction"))
      const dt = dataQuery.docs.map((item)=> 
       ({
          id: item.id,
          date: item.data().date,
          amount: item.data().amount,
          description: item.data().description,
          category: item.data().category,
          type: item.data().type
        })
      )

      setData(dt)

      console.log(dt)
    }
    getInitial()
    },[])

    async function addTransaction(item: line){
      try{
        const docQuery = await addDoc(collection(db, "transaction"),{
          amount: item.amount,
          category: item.category,
          date: item.date,
          description: item.description,
          type: item.type,
        })

        setData([...data,
          {
          id: docQuery.id,
          amount: item.amount,
          category: item.category,
          date: item.date,
          description: item.description,
          type: item.type,
        }]
        )
      } catch(error){
        console.log(error)
        alert("Os dados só estão rodando localmente")
        setData([...data,
          {
          id: item.id,
          amount: item.amount,
          category: item.category,
          date: item.date,
          description: item.description,
          type: item.type,
        }]
        )
      }
    }

    async function removeTransaction(id:string) {
      try{
        await deleteDoc(doc(db, "transaction", id))
      }catch(error){
        console.log(error)
      }
      const dt = data.filter((item)=> item.id !== id)
      setData(dt)
    }

    return(
      <DataContext.Provider value={{data, addTransaction, removeTransaction}}>
        {children}
      </DataContext.Provider>
    )
}
 