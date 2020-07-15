import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './views/pages/Home';
import CreatePoint from './views/pages/CreatePoint';
import SearchResults from './views/pages/SearchResults';

const Routes = () =>{
    return (
        <BrowserRouter>
            <Switch>
                 <Route component={Home} exact path="/" />
                 <Route component={CreatePoint} exact path="/create-point" />
                 <Route component={SearchResults} exact path="/search" />
            </Switch>           
        </BrowserRouter>
    );
};
export default Routes;