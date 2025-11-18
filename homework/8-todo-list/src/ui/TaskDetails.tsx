import {useEffect, useState} from "react";
import {getTask} from "../dal/api.ts";
import {type TaskDetails} from "../dal/api.ts";

type Props = {
    selectedTaskId: string | null;
    boardId: string | null;
}

export function TaskDetails({selectedTaskId, boardId}: Props) {

    const [selectedTask, setSelectedTask] = useState<TaskDetails | null>(null);

    useEffect(() => {
        if (!selectedTaskId) {
            return;
        }

        getTask(boardId, selectedTaskId).then(json => setSelectedTask(json.data));
    }, [selectedTaskId]);



    return (
        <div className={'main-container-task-details'}>
            <h2>👀 Task details:</h2>
            {!selectedTaskId && 'Задача не выбрана 😢.'}
            {selectedTaskId && selectedTask?.id !== selectedTaskId && <div>Загрузка задачи 🎲</div>}
            {selectedTask?.id === selectedTaskId  && (
                <div>
                    <p>Задача:   <span>{selectedTask?.attributes.title}</span></p>
                    <p>Доска:    <span>{selectedTask?.attributes.boardTitle}</span></p>
                    <p>Описание: <span>{selectedTask?.attributes.description || 'Пусто'}</span></p>
                </div>
            )}
        </div>
    );
}