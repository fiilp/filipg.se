import React from 'react';
import ReactDOM from 'react-dom';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProfileOverview from '../profileOverview';

describe('Render tests (<ProfileOverview/>)', () =>{ 
    function calculateAge(birthday) { // birthday is a date
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
    beforeEach(() => render(<ProfileOverview
        name="Filip Garamvölgyi"
        about="Utvecklare med intresse för serier och spel!"
        personal={[
            {type: 'Ålder', data: calculateAge(new Date(1998, 10, 15))},
            {type: 'Email', data: 'filipgar@kth.se'},
            {type: 'Yrke', data: 'Student - KTH, högskoleingengör i datateknik,'},
            {type: '', data: 'Wincher - Chattsupport & Utvecklare'},
        ]}
     />));
     test('renders component', ()=>{
        expect(screen.getByTestId('profileOverview')).toBeTruthy();
     });
});

