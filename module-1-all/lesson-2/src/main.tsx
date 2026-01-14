import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.tsx'
import {MainPage} from "./MainPage/MainPage.tsx";

createRoot(document.getElementById('root')!)
    .render(<MainPage />)
