import React from 'react';
import ReactDOM from 'react-dom';
import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderMenu from '../headerMenu';

describe('Render tests (<HeaderMenu/>)', () =>{ 
    beforeEach(() => render(
        <HeaderMenu 
            header="Filip G" 
            subheader="utvecklare"
            content={['#','#']}
        />
    ));

    test('renders header menu',()=>{
        expect(screen.getByTestId('headerMenu')).toHaveClass('HeaderMenu');
    });
    test('renders correct content based on props',()=>{
        expect(screen.getByTestId('header')).toHaveTextContent('Filip G');
        expect(screen.getByTestId('subheader')).toHaveTextContent('utvecklare');
    });
});