import { TodoContext } from './context';

export function TodoContextProvider({ children }: { children: JSX.Element }) {
    const context = { task: [] };
    return (
        <TodoContext.Provider value={context}>{children}</TodoContext.Provider>
    );
}
