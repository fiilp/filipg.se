import React from 'react';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import LandingPage from './views/landingPage/landingPage';
import './app.css';

function App(){
    return (
        <div data-testid="app" className="App">
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/projekt" component={Projekt} />
            </Switch>
            <footer>
                <a rel="noopener noreferrer" href="https://icons8.com/icons/set/github">GitHub</a>, <a rel="noopener noreferrer" target="_blank" href="https://icons8.com/icons/set/linkedin">LinkedIn</a> and other icons by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>
            </footer>
        </div>    
    );
}; export default App;

function Projekt(){
    return (
    <div>
        <h1>Projekt</h1>
        <Link to="/">home</Link>
    </div>);
}