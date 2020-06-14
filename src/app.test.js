import React from 'react';
import ReactDOM from 'react-dom';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './app';


describe('Render tests (<App/>)', () =>{ 
    beforeEach(() => render(<App/>));
    test('renders correct amount of children', () => {    
        expect(screen.getByTestId('app').childElementCount).toBe(1);
    });
    test('contains landing page', () => {    
        expect(screen.getByTestId('h1')).toHaveTextContent('Welcome');
    });
});

