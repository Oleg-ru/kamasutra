import {useEffect, useState} from "react";
import {getTasks, type Task} from "../dal/api.ts";

export function useTasks() {
    const [tasks, setTasks] = useState<Array<Task> | null>(null);

    useEffect(() => {
        getTasks().then(data => setTasks(data.data));
    }, []);

    return {tasks}
}