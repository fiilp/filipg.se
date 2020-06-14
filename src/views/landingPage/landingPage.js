import React from 'react';
import HeaderMenu from '../../components/headerMenu/headerMenu';
import './landingPage.css';
import ProfileOverview from '../../components/profileOverview/profileOverview';

const LandingPage = () => {
    return (
        <div data-testid="landingPage" className="LandingPage">   
            <HeaderMenu 
                header="Filip G" 
                subheader="utvecklare" 
                content={['Om mig', 'Projekt', 'Kontakta mig']}
             />
             <ProfileOverview
                name="Filip Garamvölgyi"
                about="Utvecklare med intresse för TV-serier, fotboll och spel!"
                personal={[
                    {type: 'Ålder', data: calculateAge(new Date(1998, 10, 15))},
                    {type: 'Email', data: 'filipgar@kth.se'},
                    {type: 'Yrke', data: 'Student - KTH, högskoleingengör i datateknik,'},
                    {type: '', data: 'Wincher - Chattsupport & Utvecklare'},
                ]}
             />        
        </div>
    );
}; export default LandingPage;

function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};