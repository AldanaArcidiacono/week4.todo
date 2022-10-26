import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../../../share/home/page/home.page';
import ToDoPage from '../../../share/todo/page/todo.page';

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
