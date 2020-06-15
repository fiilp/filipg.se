import React from 'react';
import ReactDOM from 'react-dom';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutMe from '../aboutMe';

describe('Render tests (<AboutMe/>)', () =>{ 
    beforeEach(() => render(<AboutMe/>));
    test('renders component', () => {
        expect(screen.getByTestId('aboutMe')).toBeTruthy();
    });
});