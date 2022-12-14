import { Link } from 'react-router-dom';
import './menu.css'; // No es en modulo

export function Menu() {
    const menuOptions = [
        { id: '1', path: '', label: 'Inicio' },
        { id: '2', path: 'todo', label: 'Tareas' },
        { id: '3', path: 'todoFlux', label: 'TareasFlux' },
    ];
    return (
        <nav>
            <ul>
                {menuOptions.map((item) => (
                    <li key={item.id}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
