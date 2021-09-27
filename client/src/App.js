import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import ListSpecies from './components/ListSpecies';
import ListPeople from './components/ListPeople';
import Test from './components/Test';

//====================================

// Above I've imported all of my packages, styles, and components.

// Below I used the react-router-dom package to setup paths for the ListSpecies and ListPeople components, while leaving the Nav component rendered all the time.

//====================================

function App() {
    return (
        <Router>
            <div className='App'>
                <Nav />
                <Switch>
                    <Route path='/' exact component={ListSpecies} />
                    <Route path='/people' component={ListPeople} />
                    <Route path='/test' component={Test} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
