import { TodoContextProvider } from '../../infrastructure/context/todo/provider';
import { Layout } from '../layout/layout';
import { AppRoutes } from '../routes/app.routes';

function App() {
    return (
        <Layout>
            <TodoContextProvider>
                <AppRoutes></AppRoutes>
            </TodoContextProvider>
        </Layout>
    );
}

export default App;
