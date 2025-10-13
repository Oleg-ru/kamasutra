import './App.css'
import {useEffect, useState} from "react";

// const tasks = [
//     {
//         id: 1,
//         title: "Купить продукты на неделю",
//         isDone: false,
//         addedAt: "1 сентября",
//         priority: 2,
//     },
//     {
//         id: 2,
//         title: "Полить цветы",
//         isDone: true,
//         addedAt: "2 сентября",
//         priority: 0,
//     },
//     {
//         id: 3,
//         title: "Сходить на тренировку",
//         isDone: false,
//         addedAt: "3 сентября",
//         priority: 1,
//     },
//     {
//         id: 4,
//         title: "Срочно отправить рабочий отчет",
//         isDone: false,
//         addedAt: "4 сентября",
//         priority: 4,
//     },
//     {
//         id: 5,
//         title: "Заплатить за коммунальные услуги",
//         isDone: false,
//         addedAt: "3 сентября",
//         priority: 3,
//     },
// ]
const KEY_API = 'none';

function App() {

    const [tasks, setTasks] = useState(null)
    const [selectedTaskId, setSelectedTaskId] = useState(null);
    const [selectedTask, setSelectedTask] = useState(null);

    useEffect(() => {
        fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
            headers: {
                'api-key': KEY_API
            }
        })
            .then(resp => resp.json())
            .then(data => setTasks(data.data));
    }, []);
    useEffect(() => {
        if (!selectedTaskId) {
            return;
        }

        function getData(currentTask) {
            fetch(`https://trelly.it-incubator.app/api/1.0/boards/${currentTask.attributes.boardId}/tasks/${currentTask.id}`, {
                headers: {
                    'api-key': KEY_API
                }
            }).then(resp => resp.json())
                .then(data => setSelectedTask(data.data));
        }

        const findTask = tasks.find(task => task.id === selectedTaskId);
        getData(findTask)
    }, [selectedTaskId]);

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
                    setSelectedTask(null);
                }}>Сбросить выделение
                </button>
                {
                    tasks.map(task => {
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
            <div className={'main-container-task-details'}>
                <h2>👀 Task details:</h2>
                {!selectedTaskId && 'Задача не выбрана 😢.'}
                {selectedTaskId && selectedTask.id !== selectedTaskId && <div>Загрузка задачи 🎲</div>}
                {selectedTask.id === selectedTaskId  && (
                    <div>
                        <p>Задача:   <span>{selectedTask?.attributes.title}</span></p>
                        <p>Доска:    <span>{selectedTask?.attributes.boardTitle}</span></p>
                        <p>Описание: <span>{selectedTask?.attributes.description || 'Пусто'}</span></p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default App
