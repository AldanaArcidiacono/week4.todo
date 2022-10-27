import { createContext } from 'react';
import { Task } from '../../../features/todo/models/task';

const initialContext: {
    task: Array<Task>;
} = {
    task: [],
};

export const TodoContext = createContext(initialContext);
