import React from 'react';
import ContentBox from '../../components/contentBox/contentBox';
import './aboutMe.css';

const text1 = () =>
`Under min gymnasietid studerade jag informations- och mediateknik med intriktning spelutveckling på NTI-Gymnasiet
på Odenplan. Efter det spenderade jag två perioder på BTH där jag läste Software Engineering men kände att BTH inte passade mig.
Jag tänkte att om jag ändå skulle läsa ett ingenjörsprogram kunde jag lika gärna göra det på KTH. Sedan dess har jag studerat på
högskoleingejörsprogrammet för datateknik på KTH.\n
Under senaste tiden har jag under min fridtid lekt runt med olika programmeringsspårk så som; C#, Java och Javascript.
Just nu testar jag framförallt olika tekniker i JavaScript. Den här hemsidan bl.a. gjordes i ett försök att pröva på **Server Side Rendering** med **React**.
`;
const text2 = () =>
`### Studier
Typ | Plats | Utbildning | Längd
--- | --- | --- | ---
Högskola | KTH, Stockholm | Datateknik | 2018 -
Högskola | BTH, Blekinge | Software Engineering | 2017 - 2018
Gymnasial | NTI-gymnasiet, Odenplan | Informations- och mediateknik | 2014 - 2017
### Språkkunskapar
* Svenska - kan skriva och tala
* Engelska - kan skriva och tala
* Tyska - kan tala
* Ungerska - kan förstå
`;
const text3 = () =>
`### Tidigare jobb
Företag | Roll | Period 
--- | --- | --- 
Wincher | Chattsupport & Utvecklare | 2019-
Tobii Dynavox | Översättning (engelska till svenska), publicering av nya varor på hemsida | 2017
Spel & Sånt | Kundservice, DVD-slipning, publicering av nya varor på hemsidan | 2013
Konsum | Placering av varor, städ och inventering | 2012
`;
//TODO: Split Make AboutMe to a view using the div > h2, div > content box as props 
const AboutMe = React.forwardRef((props, ref) => {
    
    return (
        <div ref={ref} data-testid="aboutMe" className="AboutMe">
            <div>
            <h2>Om mig</h2>
            <ContentBox
                img={{alt: 'Figur på utvecklare.', src: './profil2.png'}}
                markdown={text1()}
            />
            </div>
            <div>
                <h2>Utbildning</h2>
                <ContentBox
                    img={{alt: 'Utveckling med lugnande dryck.', src: './skola.png'}}
                    markdown={text2()}
                />
            </div>
            <div>
                <h2>Erfarenheter</h2>
                <ContentBox
                    img={{alt: 'Utveckling med lugnande dryck.', src: './wurk.png'}}
                    markdown={text3()}
                />
            </div>
            <div className="backToBtn">
                <button onClick={props.toStartFun}>Tillbaka till topppen</button>
            </div>
        </div>
    )
}); export default AboutMe;
