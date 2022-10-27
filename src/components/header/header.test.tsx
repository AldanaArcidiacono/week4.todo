import { render, screen } from '@testing-library/react';
import { Header } from './header';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Given Header component', () => {
    describe('When we render the component', () => {
        test('Then it should display "Learning React"', () => {
            render(
                <Router>
                    <Header />
                </Router>
            );
            const element = screen.getByText(/Learning React/i); // Expresion regular
            expect(element).toBeInTheDocument();
        });
    });
});
