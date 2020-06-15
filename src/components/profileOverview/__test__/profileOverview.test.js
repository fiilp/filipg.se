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
        about="Intresse för utveckling sedan länge. Även stort fan av TV-serier, fotboll och spel."
        personal={[
            {type: 'Ålder', data: calculateAge(new Date(1998, 10, 15))},
            {type: 'Email', data: 'filipgar@kth.se'},
            {type: 'Yrke', data: 'Student - KTH, högskoleingengör i datateknik,'},
            {type: '', data: 'Wincher - Chattsupport & Utvecklare'},
        ]}
        socials={[
            {link: "https://github.com/FilipKTH", img: "githubIcon.png", social: "GitHub"},
            {link: "https://github.com/FilipKTH", img: "linkedinicon.png", social: "LinkedIn"},
            {link: "https://github.com/FilipKTH", img: "youtubeIcon.png", social: "Youtube"},
        ]}
     />));
     test('renders component', ()=>{
        expect(screen.getByTestId('profileOverview')).toBeTruthy();
     });
});

