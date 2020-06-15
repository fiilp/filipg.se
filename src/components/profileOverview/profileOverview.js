import React from 'react';
/**
 * Short presentation about a person, mainly contact information. 
 * @param {object}      props           contains attributes of the component
 * @param {string}      props.img       picture of person in overview 
 * @param {string}      props.alt       alt text for picture
 * @param {string}      props.name      name of person
 * @param {string}      props.about     some overview information of the person
 * @param {string[]}    props.personal  key value pair of contact info to be put in table, {type, data}
 * @param {string[]}    props.socials   key value pair of socials, {link, img, social}
 */
function ProfileOverview(props){
    return (
        <div data-testid="profileOverview" className="ProfileOverview">
            <div>
                <img src={props.img || "./profil.png"} alt={props.alt || "Filip Garamvölgyi; ett självporträtt"}/>
            </div>
            <div>
                <div>
                    <h2>{props.name}</h2>
                    <h3>{props.about}</h3>
                </div>
                <div>
                    <table>
                        <tbody data-testid="personal">
                            {props.personal.map((e, i)=> (
                                <tr key={i}><th>{e.type}</th><td>{e.data}</td></tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div data-testid="socials">
                    {props.socials.map((e,i) => <a key={i} href={e.link}><img alt={e.social} src={e.img}/></a>)}
                </div>
            </div>
        </div>
    )
}; export default ProfileOverview;