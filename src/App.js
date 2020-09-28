import React from 'react';
import './App.css'
import {Navbar} from './components/Navbar'
import MainWindow from './components/mainWindow'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';

function App(){
    return(
        <>
        <Router>
            <Navbar />
            
            <Switch>
                <Route path='/' />
            </Switch>
        </Router>
        {/* <MainWindow /> */}
        </>
    )
}
export default App;

