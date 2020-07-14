import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

const Routes = () =>{
    return (
        <BrowserRouter>
            <Switch>
                 <Route component={Home} exact path="/" />
            </Switch>           
        </BrowserRouter>
    );
};
export default Routes;