import React from 'react';
import { Switch, Route } from 'react-router';
import MainPage from '../../pages/MainPage/MainPage';
import ResultsList from '../ResultsList/ResultsList';
import Favorites from '../../pages/Favorites';
import ApartmentDetails from '../ApartmentDetails/ApartmentDetails';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/results/:city" component={ResultsList} />
            <Route path="/results/:city/:id" component={ApartmentDetails} />
            <Route path="/favorites" component={Favorites} />
        </Switch>
    );
}

export default Routes;
