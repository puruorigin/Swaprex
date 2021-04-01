import React from 'react'
import {Route} from 'react-router-dom';
import Dashboard from './Dashboard';

const Routes = () => {
    return(
            <>
                {/* <Switch> */}
                    {/* <Route exact path='/' component={check}></Route>
                    <Route exact path='/AboutUs' component={AboutUs}></Route> */}
                    <Route exact path='/' component={Dashboard}></Route>
                    {/* <Route exact path='/AboutUs' component={AboutUs}></Route> */}
                {/* </Switch> */}
                {window.location.pathname !=='/' ? <Dashboard /> : <Route />}
             </>
         )
   
}

export default Routes

