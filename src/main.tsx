import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SizeDropdownProvider } from './context/SizeDropdownContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SizeDropdownProvider>
      <App />
    </SizeDropdownProvider>
  </StrictMode>,
)
