import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {TogglePage} from "./ui/TogglePage.tsx";
import {TextPage} from "./ui/TextPage.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TogglePage />
      <hr/>
      <TextPage />
  </StrictMode>,
)
