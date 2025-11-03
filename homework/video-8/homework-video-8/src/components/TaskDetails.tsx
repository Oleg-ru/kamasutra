import {useEffect, useState} from "react";

export function TaskDetails({selectedTaskId, boardId, }) {
    const KEY_API = import.meta.env.VITE_API_KEY;
    const [selectedTask, setSelectedTask] = useState(null);

    // Заглушки
    const tasks = null;

    useEffect(() => {
        if (!selectedTaskId) {
            return;
        }

        function getData(currentTask) {
            fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${selectedTaskId}`, {
                headers: {
                    'api-key': KEY_API
                }
            }).then(resp => resp.json())
                .then(data => setSelectedTask(data.data));
        }

        const findTask = tasks?.find(task => task.id === selectedTaskId);
        getData(findTask)
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