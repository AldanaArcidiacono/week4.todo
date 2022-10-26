import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Given Footer component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(<Footer />);
        });
        test('Then it should display "ISDI"', () => {
            const element = screen.getByText(/ISDI/i);
            expect(element).toBeInTheDocument();
        });

        // test('Then it should display todays date', () => {
        //     const expectedDate = new Date().toLocaleString();
        //     const element = screen.getByText(expectedDate);
        //     expect(element).toBeInTheDocument();
        // });
        // VER DEL REPO
    });
});
