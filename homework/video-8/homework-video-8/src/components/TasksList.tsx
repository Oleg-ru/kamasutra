import './TaskList.css'
import {useEffect, useState} from "react";
import TaskItem from "./TaskItem.tsx";

export function TasksList({setSelectedTaskId, selectedTaskId, setBoardId}) {
    const KEY_API = import.meta.env.VITE_API_KEY;

    const [tasks, setTasks] = useState(null);

    useEffect(() => {
        fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
            headers: {
                'api-key': KEY_API
            }
        })
            .then(resp => resp.json())
            .then(data => setTasks(data.data));
    }, []);

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
                    tasks.map(task => {
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