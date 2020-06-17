import React from 'react';
import ContentBox from '../../components/contentBox/contentBox';
import './aboutMe.css';

function AboutMe(props){
    return (
        <div data-testid="aboutMe" className="AboutMe">
            <div>
            <h2>Om mig</h2>
                <ContentBox
                    img={{alt: 'Figur på utvecklare.', src: './profil2.png'}}
                    markdown={
`Under min gymnasietid studerade jag informations- och mediateknik med intriktning spelutveckling på NTI-Gymnasiet
på Odenplan. Efter det spenderade jag två perioder på BTH där jag läste Software Engineering men kände att BTH inte passade mig.
Jag tänkte att om jag ändå skulle läsa ett ingenjörsprogram kunde jag lika gärna göra det på KTH.  
Sedan dess har jag studerat på högskoleingejörsprogrammet för datateknik på KTH.\n
Under senaste tiden har jag under min fridtid lekt runt med olika programmeringsspårk så som; C#, Java och Javascript.
Just nu testar jag framförallt olika tekniker i JavaScript. Den här hemsidan bl.a. gjordes i ett försök att pröva på **Server Side Rendering** med **React**.`
                    }
                    
                />
            </div>
            <div>
                <h2>Kunskaper & Erfarenheter</h2>
                <ContentBox
                    img={{alt: 'Utveckling med lugnande dryck.', src: './wurk.png'}}
                    markdown={
`### Utbildning  
Typ | Plats | Utbildning | Längd
--- | --- | --- | ---
Högskola | KTH, Stockholm | Datateknik | 2018 -
Högskola | BTH, Blekinge | Software Engineering | 2017 - 2018
Gymnasial | NTI-gymnasiet, Odenplan | Informations- och mediateknik | 2014 - 2017
### Språkkunskapar
* Svenska - kan skriva och tala
* Engelska - kan skriva och tala
* Tyska - kan tala
* Ungerska - kan förstå`}
                />
            </div>
        </div>
    )
}; export default AboutMe;
