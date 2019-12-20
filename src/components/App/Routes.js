import React from 'react';
import { Switch, Route } from 'react-router';
import MainPage from '../../pages/MainPage/MainPage';
import ResultsList from '../ResultsList/ResultsList';
import Favorites from '../../pages/Favorites';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/results/:city" component={ResultsList} />
            <Route path="/favorites" component={Favorites} />
        </Switch>
    );
}

export default Routes;
