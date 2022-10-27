import { render, screen } from '@testing-library/react';
import { Layout } from './layout';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Given Layout component', () => {
    describe('When we render the component', () => {
        test('Then it should display...', () => {
            render(
                <Router>
                    <Layout>
                        <p>Testing Layout</p>
                    </Layout>
                </Router>
            );
            const element = screen.getByText(/Testing Layout/i); // Expresion regular
            expect(element).toBeInTheDocument();
        });
    });
});
