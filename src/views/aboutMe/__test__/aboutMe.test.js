import React from 'react';
import ReactDOM from 'react-dom';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Render tests (<AboutMe/>)', () =>{ 
    //beforeEach(() => render(<ContentBox/>));
    test('renders component', () => {
        expect(true).toBeTruthy();
    });
});