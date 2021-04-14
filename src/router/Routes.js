import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import { Home } from '../pages/Home';


export const Routes = () => {
    return (
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/" render component ={Home} />
                </Switch>
            </Router>
        </>
    )
}
