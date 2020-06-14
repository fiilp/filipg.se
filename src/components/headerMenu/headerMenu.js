import React from 'react';

function HeaderMenu(props){
    return(
        <div data-testid="headerMenu" className="HeaderMenu">
            <header>
                <h1 data-testid="header">{props.header}</h1>
                <h3 data-testid="subheader">{props.subheader}</h3>
            </header>
            <nav>
                {props.content.reverse().map((e, i) => <span key={i}>{e}</span>)}
            </nav>
        </div>
    )
} export default HeaderMenu;