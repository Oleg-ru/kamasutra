import { createRoot } from 'react-dom/client'
import './index.css'
import Users from './components/User/Users.tsx'
import {App} from "./components/App/App.tsx";

createRoot(document.getElementById('root')!).render(
  <>
    <Users />
      <hr/>
    <App/>
  </>,
)
