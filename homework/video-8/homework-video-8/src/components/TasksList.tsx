import './TaskList.css'
import {useEffect, useState} from "react";

function getPriorityClass(priority: number) {
    switch (priority) {
        case 0:
            return 'low-priority';
        case 1:
            return 'medium-priority';
        case 2:
            return 'high-priority';
        case 3:
            return 'urgent-priority';
        case 4:
            return 'highest-priority';
        default:
            return '';
    }
}

export function TasksList() {
    const KEY_API = import.meta.env.VITE_API_KEY;

    const [tasks, setTasks] = useState(null);
    const [selectedTaskId, setSelectedTaskId] = useState(null);

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

    return (
        <div className={'main-container'}>
            <div className='main-container-tasks'>
                <button className='reset-btn' onClick={() => {
                    setSelectedTaskId(null);
                    // setSelectedTask(null);
                }}>Сбросить выделение
                </button>
                {
                    tasks.map(task => {
                        const classTitle = `task-title ${task.isDone ? 'line-through' : ''}`;
                        const backgroundTask =
                            `task-self-container ${getPriorityClass(task.attributes.priority)} ${selectedTaskId === task.id ? 'border-blue' : ''}`;

                        return (
                            <div key={task.id} className={backgroundTask} onClick={() => {
                                //alert(task.id) // задание 1
                                setSelectedTaskId(task.id); //задание 2
                            }}>
                                <span className='task-main-title'>Заголовок:</span>
                                <span className={classTitle}>{task.attributes.title}</span>
                                <br/>
                                <span className='task-status'>Статус: </span>
                                <input type="checkbox" checked={task?.isDone}/>
                                <br/>
                                <span className='task-title-date'>Дата создания задачи: </span>
                                <span className='task-start-date'>{task.attributes.addedAt}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}