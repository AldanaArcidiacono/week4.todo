//export const a1 = { type: '', payload: null }; // Ejemplo de accion basico

import { actionTypes } from './action.types';

//export const a2 = { type: 'getTask', payload: null }; // Accion con payload null (traer todas las tareas)

//export const a3 = { type: 'addTask', payload: {} }; //

// Para la const y el enum, lo usamos asi
export const a2 = { type: actionTypes.load, payload: null };
export const a3 = { type: actionTypes.add, payload: {} };
