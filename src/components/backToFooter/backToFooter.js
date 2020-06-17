import React from 'react';
/**
 * 
 * @callback    clickCallback       
 * @param       {Event} e   contains Event of event listner   
 */

/**
 * Takes a container and attaches a footer to the container. The footer is meant to take 
 * the user back to some sort of navigation. 
 * @param {object}          props               contains the attributes of the component.
 * @param {React.Component} props.container     contains the container which will have a footer attached to it.
 * @param {React.Component} props.backComponent [backComponent=React.createElement('div')] optionally your own component can be attached as a footer.
 * @param {clickCallback}   props.backFunc      function called when this component is clicked. Not used if {props.backComponent} is in use.
 * @param {string}          props.backToTxt     text used in component clicked to get back to the navigation. Not used if {props.backComponent} is in use.
 */ 

function BackToFooter(props){
    return (
    <div data-testid="backToFooter" className="BackToFooter">
        {props.container}
        {
        props.backComponent || 
        (<div className="backToCont">
            <div data-testid="backToCont" className="backToBtn" onClick={props.backFunc}>{props.backToTxt}</div>
        </div>)
        }
    </div>);
}; export default BackToFooter;