import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Given Footer component', () => {
    describe('When we render the component', () => {
        test('Then it should display "ISDI"', () => {
            render(<Footer />);
            const element = screen.getByText(/ISDI/i);
            expect(element).toBeInTheDocument();
        });
        // test('Then it should display today date', () => {
        //     render(<Footer />);
        //     const expectedDate = new Date().toLocaleString();
        //     const element = screen.getByText(expectedDate);
        //     expect(element).toBeInTheDocument();
        // });
    });
});
