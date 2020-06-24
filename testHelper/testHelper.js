import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
/**
 * Tests if the component is rendered to the DOM. The test
 * Currently expects the class of the component to be named 
 * after the component and the testid is named after the
 * component without the capitiliazed letter at the start.
 * @param {React.Component} Comp    React component to test 
 * @param {object} props            Potential props needed to render component
 */
const canRenderComponent = (Comp, props) => {
    render(<Comp {...props}/>)
    describe(`Render tests (<${Comp.name}/>)`, () =>{ 
        test('renders component', ()=>{
            expect(screen.getByTestId(Comp.name.replace(/./, l=>l.toLowerCase()))).toBeTruthy();
        });
    });
}; export default canRenderComponent; 