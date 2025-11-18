import {TaskDetails} from "../ui/TaskDetails.tsx";

const KEY_API = import.meta.env.VITE_API_KEY;

export type Task = {
    id: string
    type: string
    attributes: {
        title: string
        boardId: string
        status: number
        priority: number
        addedAt: string
        attachmentsCount: number
    }
}

type TaskOutput = {
    data: Array<Task>
}

export type TaskDetails = {
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

type TaskDetailsOutput = {
    data: TaskDetails
}


export const getTask = (boardId: string | null, selectedTaskId: string)=>  {
    const promise: Promise<TaskDetailsOutput> = fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${selectedTaskId}`, {
        headers: {
            'api-key': KEY_API
        }
    }).then(resp => resp.json());

    return promise;
}

export const getTasks = () => {
    const promise: Promise<TaskOutput> = fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
        headers: {
            'api-key': KEY_API
        }
    })
        .then(resp => resp.json());

    return promise;
}