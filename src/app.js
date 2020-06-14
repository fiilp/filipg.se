import React from 'react';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
function App(){
    return (
        <div data-testid="app" className="App">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/projekt" component={Projekt} />
            </Switch>
        </div>    
    );
}; export default App;

function Home(){
    return (
    <div>
        <h1>Home</h1>
        <Link to="/projekt">projekt</Link>
    </div>);
}
function Projekt(){
    return (
    <div>
        <h1>Projekt</h1>
        <Link to="/">home</Link>
    </div>);
}