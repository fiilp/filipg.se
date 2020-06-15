import React from 'react';
import HeaderMenu from '../../components/headerMenu/headerMenu';
import './landingPage.css';
import ProfileOverview from '../../components/profileOverview/profileOverview';
import AboutMe from '../aboutMe/aboutMe';

const LandingPage = () => {
    return (
        <div data-testid="landingPage" className="LandingPage">
            <div>   
                <HeaderMenu 
                    header="Filip G" 
                    subheader="utvecklare med erfarenhet inom: JS, Java, C# och mer!" 
                    content={['Om mig', 'Projekt', 'Kontakta mig']}
                />
                <ProfileOverview
                    name="Filip Garamvölgyi"
                    about="Intresse för utveckling sedan länge. Även stort fan av TV-serier, fotboll och spel."
                    personal={[
                        {type: 'Ålder', data: calculateAge(new Date(1998, 10, 15))},
                        {type: 'Email', data: 'filipgar@kth.se'},
                        {type: 'Yrke', data: 'Student - KTH, högskoleingengör i datateknik,'},
                        {type: '', data: 'Wincher - Chattsupport & Utvecklare'},
                    ]}
                    socials={[
                        {link: "https://github.com/FilipKTH", img: "linkedinicon.png", social: "LinkedIn"},
                        {link: "https://github.com/FilipKTH", img: "githubIcon.png", social: "GitHub"},
                        {link: "https://github.com/FilipKTH", img: "youtubeIcon.png", social: "Youtube"},
                    ]}
                />     
            </div> 
            <AboutMe/>
        </div>
    );
}; export default LandingPage;

function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};