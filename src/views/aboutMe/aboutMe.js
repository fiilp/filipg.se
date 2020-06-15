import React from 'react';
import ContentBox from '../../components/contentBox/contentBox';
import './aboutMe.css';

function AboutMe(props){
    return (
        <div data-testid="aboutMe" className="AboutMe">
            <h2>Om mig</h2>
            <ContentBox
                markdown="![figur på utvecklare](./profil2.png)<br>Jag började programmera i strax innan gymnasiet och har sedan dess prövat på spelutveckling, 
                webbutveckling och andra projekt i Java & C#. Nu på senaste tiden har jag framförallt gjort olika projekt i JavaScript. Den här hemsidan bl.a.
                gjordes i ett försök att pröva på **Server Side Rendering** med **React**.
                "
            />
        </div>
    )
}; export default AboutMe;