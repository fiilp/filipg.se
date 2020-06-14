import React from 'react';
/**
 * Short presentation about a person, mainly contact information. 
 * @param {img}         props picture of person in overview 
 * @param {alt}         props alt text for picture
 * @param {name}        props name of person
 * @param {about}       props some overview information of the person
 * @param {personal}    props key value pair of contact info to be put in table
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
                        <tbody>
                            {props.personal.map((e, i)=> (
                                <tr key={i}><th>{e.type}</th><td>{e.data}</td></tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}; export default ProfileOverview;