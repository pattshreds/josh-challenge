import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ListSpecies from './components/ListSpecies';
import Nav from './components/Nav';
import ListPeople from './components/ListPeople';
// import Test from './components/Test';


function App() {
    return (
        <Router>
            <div className='App'>
                <Nav />
                    <Switch>
                        <Route path="/" exact component={ListSpecies} />
                        <Route path='/people' component={ListPeople} />
                        {/* <Test /> */}
                    </Switch>    
            </div>
        </Router>
    );
}

export default App;
