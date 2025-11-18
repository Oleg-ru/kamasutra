import {useTaskDetails} from "../bll/useTaskDetails.ts";

type Props = {
    selectedTaskId: string | null;
    boardId: string | null;
}

export function TaskDetails({selectedTaskId, boardId}: Props) {

    const {taskDetails} = useTaskDetails(selectedTaskId, boardId);

    return (
        <div className={'main-container-task-details'}>
            <h2>👀 Task details:</h2>
            {!selectedTaskId && 'Задача не выбрана 😢.'}
            {selectedTaskId && taskDetails?.id !== selectedTaskId && <div>Загрузка задачи 🎲</div>}
            {taskDetails?.id === selectedTaskId  && (
                <div>
                    <p>Задача:   <span>{taskDetails?.attributes.title}</span></p>
                    <p>Доска:    <span>{taskDetails?.attributes.boardTitle}</span></p>
                    <p>Описание: <span>{taskDetails?.attributes.description || 'Пусто'}</span></p>
                </div>
            )}
        </div>
    );
}