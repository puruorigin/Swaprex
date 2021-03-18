import React, { Component } from 'react'
import AboutUs from './AboutUs'
import check from './check'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';

const Routes = () => {
    return(
            <>
                <Switch>
                    {/* <Route exact path='/' component={check}></Route>
                    <Route exact path='/AboutUs' component={AboutUs}></Route> */}
                    <Route exact path='/' component={Dashboard}></Route>
                    {/* <Route exact path='/AboutUs' component={AboutUs}></Route> */}
                </Switch>
             </>
         )
   
}

export default Routes

