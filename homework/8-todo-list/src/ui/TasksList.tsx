import './TaskList.css'
import { type Task} from "../dal/api.ts";
import TaskItem from "./TaskItem.tsx";
import {useTasks} from "../bll/useTasks.ts";

type Props = {
    setSelectedTaskId: (id: string | null) => void;
    selectedTaskId: string | null;
    setBoardId: (id: string | null) => void;
}

export function TasksList({setSelectedTaskId, selectedTaskId, setBoardId}: Props) {

    const { tasks } = useTasks();

    if (tasks === null) {
        return <h2>Загрузка...📡</h2>
    } else if (tasks.length === 0) {
        return <h2>Еще нет задач 🎃</h2>
    }

    function handleReset() {
        setSelectedTaskId(null);
    }

    return (
        <div className={'main-container'}>
            <div className='main-container-tasks'>
                <button className='reset-btn' onClick={handleReset}>Сбросить выделение</button>
                {
                    tasks.map((task: Task) => {
                        return <TaskItem
                            key={task.id}
                            task={task}
                            selectedTaskId={selectedTaskId}
                            setSelectedTaskId={setSelectedTaskId}
                            setBoardId={setBoardId}
                        />
                    })
                }
            </div>
        </div>
    );
}