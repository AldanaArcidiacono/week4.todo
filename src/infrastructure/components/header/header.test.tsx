import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './header';
import { MemoryRouter as Router } from 'react-router-dom';

test('renders learn react link', () => {
    render(
        <Router>
            <Header />
        </Router>
    );
    const element = screen.getByText(/react/i); // Expresion regular
    expect(element).toBeInTheDocument();
});
