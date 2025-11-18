import "./App.css"
import {TasksList} from "./ui/TasksList.tsx";
import {TaskDetails} from "./ui/TaskDetails.tsx";
import {useTaskSelection} from "./bll/useTaskSelection.ts";

function MainPage() {

    const {selectedTaskId, setSelectedTaskId, boardId, setBoardId} = useTaskSelection();

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