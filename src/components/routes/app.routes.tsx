import { Navigate, Route, Routes } from 'react-router-dom';
import ToDoPage from '../../features/todo/page/todo.page';
import HomePage from '../../share/home/page/home.page';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="" element={<HomePage></HomePage>}></Route>
            <Route path="home" element={<HomePage></HomePage>}></Route>
            <Route path="todo" element={<ToDoPage></ToDoPage>}></Route>
            <Route
                path="*"
                element={<Navigate replace to=""></Navigate>}
            ></Route>
        </Routes>
    );
}
