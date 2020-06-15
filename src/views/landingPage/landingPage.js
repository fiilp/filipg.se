import React from 'react';
import HeaderMenu from '../../components/headerMenu/headerMenu';
import './landingPage.css';
import ProfileOverview from '../../components/profileOverview/profileOverview';
import AboutMe from '../aboutMe/aboutMe';

const linkedin = 'https://img.icons8.com/ios/64/000000/linkedin.png';
const github = 'https://img.icons8.com/ios/64/000000/github.png';
const youtube = 'https://img.icons8.com/ios/64/000000/youtube.png';
const email = 'https://img.icons8.com/ios/64/000000/send-mass-email.png';

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
                        {link: "https://github.com/FilipKTH", img: linkedin, social: "LinkedIn"},
                        {link: "https://github.com/FilipKTH", img: github, social: "GitHub"},
                        {link: "mailto:filipgar@kth.se", img: email, social: "Email"},
                        {link: "https://github.com/FilipKTH", img: youtube, social: "Youtube"},
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