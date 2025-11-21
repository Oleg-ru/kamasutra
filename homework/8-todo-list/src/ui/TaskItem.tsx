import type {Task} from "../dal/api.ts";
import clsx from "clsx";
import styles from "./TaskItem.module.css"

type Props = {
    task: Task
    selectedTaskId: string | null
    setSelectedTaskId: (id: string | null) => void
    setBoardId: (id: string | null) => void
}

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

function TaskItem({task, selectedTaskId, setSelectedTaskId, setBoardId}: Props) {


    // const backgroundTask =
    //     `task-self-container ${getPriorityClass(task.attributes.priority)} ${selectedTaskId === task.id ? 'border-blue' : ''}`;


    console.log('Available styles:', styles);
    console.log('taskSelfContainer:', styles.taskSelfContainer);
    console.log('borderBlue:', styles.borderBlue);

    const backgroundTask = clsx({
        [styles.container]: true,
        [getPriorityClass(task.attributes.priority)]: true,
        [styles.border]: selectedTaskId === task.id
    });

    function handleSelectedTask() {
        setSelectedTaskId(task.id);
        setBoardId(task.attributes.boardId)
    }

    return (
        <div key={task.id} className={backgroundTask} onClick={handleSelectedTask}>
            <span className='task-main-title'>Заголовок:</span>
            <span>{task.attributes.title}</span>
            <br/>
            <span className='task-status'>Статус: </span>
            <input type="checkbox" checked={false}/>
            <br/>
            <span className='task-title-date'>Дата создания задачи: </span>
            <span className='task-start-date'>{task.attributes.addedAt}</span>
        </div>
    );
}

export default TaskItem;