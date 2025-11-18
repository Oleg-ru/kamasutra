import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {CounterPage} from "./ui/CounterPage.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
       <CounterPage />
    </StrictMode>,
)
