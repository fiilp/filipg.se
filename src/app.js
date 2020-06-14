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