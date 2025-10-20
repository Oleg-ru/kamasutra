import { createRoot } from 'react-dom/client'
import './index.css'
import {Header} from "./components/Header.tsx";
import {TasksList} from "./components/TasksList.tsx";
import {TaskDetails} from "./components/TaskDetails.tsx";
import {Footer} from "./components/Footer.tsx";
import {PageTitle} from "./components/PageTitle.tsx";

createRoot(document.getElementById('root')!).render(
    <>
        <Header />
        <PageTitle />
        <div style={{ display: "flex", gap: "30px" }}>
            <TasksList />
            <TaskDetails />
        </div>
        <Footer />
    </>

)
