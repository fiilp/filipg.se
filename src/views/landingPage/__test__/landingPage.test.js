import React from 'react';
import ReactDOM from 'react-dom';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LandingPage from '../landingPage';

describe('Render tests (<LandingPage/>)', () =>{ 
    beforeEach(() => render(<LandingPage/>));

    test('renders landing page',()=>{
        expect(screen.getByTestId('landingPage')).toHaveClass('LandingPage');
    });
});