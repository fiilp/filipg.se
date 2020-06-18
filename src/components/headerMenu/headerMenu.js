import React from 'react';

function HeaderMenu(props){
    return(
        <div data-testid="headerMenu" className="HeaderMenu">
            <header>
                <h1 data-testid="header">{props.header}</h1>
                <h3 data-testid="subheader">{props.subheader}</h3>
            </header>
            <nav>
                {props.content.map((e, i) => 
                    <span onClick={() => props.navigateFunc(i)} key={i}>{e}</span>
                ).reverse()}
            </nav>
        </div>
    )
} export default HeaderMenu;