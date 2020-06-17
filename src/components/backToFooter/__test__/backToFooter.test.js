import React from 'react';
import ReactDOM from 'react-dom';
import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BackToFooter from '../backToFooter';

describe('Render tests (<BackToFooter/>)', () =>{ 
    beforeEach(() => render(<BackToFooter/>));
    test('renders component', () => {
        expect(screen.getByTestId('backToFooter')).toBeTruthy();
    });
});
describe('props tests', () => {
    beforeEach(() => render(
        <BackToFooter
            backToTxt="Back to navigation"
            backFunc= {(e) => e.currentTarget.textContent = 'clicked'}
        />
    ));
    test('creates own components if none are specified', () => {  
        expect(screen.getByTestId('backToCont')).toHaveTextContent('Back to navigation');
    });
    test('calls attached onClick function', () => {
        fireEvent.click(screen.getByTestId('backToCont'));
        expect(screen.getByTestId('backToCont')).toHaveTextContent('clicked');
    })
})