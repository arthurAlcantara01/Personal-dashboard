import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { DataProvider } from './context/dataContext.tsx'

createRoot(document.getElementById('root')!).render(
  <DataProvider>
    <App />
  </DataProvider>,
)
