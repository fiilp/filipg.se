import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './app';


describe('Render tests (<App/>)', () =>{ 
    beforeEach(() => render(<BrowserRouter><App/></BrowserRouter>));
    test('renders container class correctly', () => {    
        expect(screen.getByTestId('app').className).toBe('App');
    });
});

