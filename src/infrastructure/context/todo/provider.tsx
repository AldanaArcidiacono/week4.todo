import { useEffect, useMemo, useState } from 'react';
import { ITask, Task } from '../../../features/todo/models/task';
import { TaskApi } from '../../../features/todo/services/task.api';

import { TodoContext } from './context';

export function TodoContextProvider({ children }: { children: JSX.Element }) {
    const initialTasks: Array<Task> = [];
    const [tasks, setTasks] = useState(initialTasks);
    const api = useMemo(() => new TaskApi(), []);

    useEffect(() => {
        api.getTasks().then((tasks) => setTasks(tasks));
    }, [api]);

    const handleAdd = (newTask: ITask) => {
        api.createTask(newTask).then((task: Task) => {
            setTasks([...tasks, task]);
        });
    };

    const handlerEraser = (deletedID: number) => {
        api.deleteTask(deletedID).then((response) => {
            if (response.ok) {
                setTasks(tasks.filter((item) => item.id !== deletedID));
            }
        });
    };
    const handlerComplete = (task: Task) => {
        api.updateTask(task.id, { isComplete: !task.isComplete }).then(
            (task) => {
                tasks.map((item) =>
                    item.id === task.id
                        ? { ...item, isComplete: !item.isComplete }
                        : item
                );
            }
        );
    };
    const handlerUpdate = (updatetask: Task) => {
        api.updateTask(updatetask.id, updatetask).then((task) => {
            tasks.map((item) => (item.id === task.id ? task : item));
        });
    };
    const context = {
        tasks,
        handleAdd,
        handlerEraser,
        handlerComplete,
    };
    return (
        <TodoContext.Provider value={context}>{children}</TodoContext.Provider>
    );
}
