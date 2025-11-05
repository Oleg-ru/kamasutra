import "./App.css"
import {TasksList} from "./components/TasksList.tsx";
import {TaskDetails} from "./components/TaskDetails.tsx";
import {useState} from "react";

function MainPage() {
    const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
    const [boardId, setBoardId] = useState<string | null>(null);

    return (
        <>
            <div className="app-container">
                <TasksList
                    selectedTaskId={selectedTaskId}
                    setSelectedTaskId={setSelectedTaskId}
                    setBoardId={setBoardId}
                />
                <TaskDetails
                    selectedTaskId={selectedTaskId}
                    boardId={boardId}
                />
            </div>
        </>
    );
}

export default MainPage;