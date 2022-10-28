// Esquema general de creacion de acciones, funcion que devuelve la creacion

import { Task } from '../models/task';
import { actionTypes } from './action.types';

// Obj factory, devuelve un objeto nuevo y no necesito un new
export const f = () => {
    return {
        type: '',
        payload: '',
    };
};
f(); // Me devuelve el objeto

type Action = {
    type: string;
    payload?: Array<Task> | Task;
};

export const loadTaskAction = (tasks: Array<Task>): Action => {
    return {
        type: actionTypes.load,
        payload: tasks,
    };
};

export const addTaskAction = (task: Task): Action => {
    return {
        type: actionTypes.add,
        payload: task,
    };
};

export const updateTaskAction = (tasks: Task): Action => {
    return {
        type: actionTypes.update,
        payload: tasks,
    };
};

export const deleteTaskAction = (tasks: Array<Task>): Action => {
    return {
        type: actionTypes.delete,
        payload: tasks,
    };
};
