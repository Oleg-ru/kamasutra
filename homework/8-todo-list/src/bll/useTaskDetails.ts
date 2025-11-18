import {useEffect, useState} from "react";
import {getTask, type TaskDetails} from "../dal/api.ts";

export function useTaskDetails(selectedTaskId: string | null, boardId: string | null) {
    const [taskDetails, setTaskDetails] = useState<TaskDetails | null>(null);

    useEffect(() => {
        if (!selectedTaskId) {
            return;
        }

        getTask(boardId, selectedTaskId).then(json => setTaskDetails(json.data));
    }, [selectedTaskId]);

    return {taskDetails}
}