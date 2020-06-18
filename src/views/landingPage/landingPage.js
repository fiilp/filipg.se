import React from 'react';
import HeaderMenu from '../../components/headerMenu/headerMenu';
import './landingPage.css';
import ProfileOverview from '../../components/profileOverview/profileOverview';
import AboutMe from '../aboutMe/aboutMe';

const linkedin = 'https://img.icons8.com/ios/64/000000/linkedin.png';
const github = 'https://img.icons8.com/ios/64/000000/github.png';
// const youtube = 'https://img.icons8.com/ios/64/000000/youtube.png';
const email = 'https://img.icons8.com/ios/64/000000/send-mass-email.png';

const LandingPage = () => {
    let start = React.createRef();
    let omMig = React.createRef();
    let projekt = React.createRef();
    //let kontaktaMig = React.createRef();
    const toStart = () => start.current.scrollIntoView({behavior: 'smooth'});
    const scrollTo = (area) => {
        switch(area){
            case 0: 
                omMig.current.scrollIntoView({behavior: 'smooth'});
            break;
            case 1: 
                projekt.current.scrollIntoView({behavior: 'smooth'});
            break;
            default: toStart(); break;
        }
    }


    return (
        <div data-testid="landingPage" className="LandingPage">
            <div ref={start}>   
                <HeaderMenu 
                    header="Filip G" 
                    subheader="utvecklare med erfarenhet inom: JS, Java, C# och mer!" 
                    content={['Om mig', 'Projekt', 'Kontakta mig']}
                    navigateFunc={scrollTo}
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
                        {link: "https://www.linkedin.com/in/filip-garamv%C3%B6lgyi-817247158/", img: linkedin, social: "LinkedIn"},
                        {link: "https://github.com/FilipKTH", img: github, social: "GitHub"},
                        {link: "mailto:filipgar@kth.se", img: email, social: "Email"},
                    ]}
                />     
            </div> 
            <AboutMe 
                ref={omMig}
                toStartFun={toStart}
            />
        </div>
    );
}; export default LandingPage;

function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};