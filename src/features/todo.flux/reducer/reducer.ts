//Funcion pura
//recibe un estado y una accion
//retorna un NUEVO estado (NO HAY MUTACION)

import { Action } from './action.creator';
import { Task } from '../models/task';
import { actionTypes } from './action.types';

//Los reducer no son mas que un switch que valoran que hacer dependiendo lo que les llega

export function taskReducer(state: Array<Task>, action: Action) {
    //const initialTasks: Array<Task> = [];

    let payload: Task;
    switch (action.type) {
        case actionTypes.load:
            return action.payload;
        case actionTypes.add:
            return [...state, action.payload];
        case actionTypes.update:
            payload = action.payload as Task;
            return state.map((item) =>
                item.id === payload.id ? payload : item
            );
        case actionTypes.delete:
            payload = action.payload as Task;
            return state.filter((item) => item.id !== payload.id);
        default:
            return { ...state };
    }
}
