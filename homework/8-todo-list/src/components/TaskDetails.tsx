import {useEffect, useState} from "react";

type Props = {
    selectedTaskId: string | null;
    boardId: string | null;
}

type TaskDetails = {
    id: string
    type: string
    attributes: {
        title: string | null
        order: number
        deadline: string | null
        startDate: string | null
        addedAt: string
        priority: number
        status: number
        updatedAt: string
        boardId: string
        boardTitle: string
        description: string | null
        attachments: Array<string>
    }
}

export function TaskDetails({selectedTaskId, boardId}: Props) {
    const KEY_API = import.meta.env.VITE_API_KEY;
    const [selectedTask, setSelectedTask] = useState<TaskDetails | null>(null);

    useEffect(() => {
        if (!selectedTaskId) {
            return;
        }

        fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${selectedTaskId}`, {
            headers: {
                'api-key': KEY_API
            }
        }).then(resp => resp.json())
            .then(data => setSelectedTask(data.data));
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