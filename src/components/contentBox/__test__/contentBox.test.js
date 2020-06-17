import React from 'react';
import ReactDOM from 'react-dom';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContentBox from '../contentBox';

describe('Render tests (<ContentBox/>)', () =>{ 
    beforeEach(() => render(<ContentBox markdown=""/>));
    test('renders component', () => {
        expect(screen.getByTestId('contentBox')).toBeTruthy();
    });
});