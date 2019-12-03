import React from 'react';
import { Switch, Route } from 'react-router';
import MainPage from '../../pages/MainPage/MainPage';
import ResultPage from '../../pages/ResultPage/ResultPage';
import Favorites from '../../pages/Favorites';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/result:city?" component={ResultPage} />
            <Route path="/favorites" component={Favorites} />
        </Switch>
    );
}

export default Routes;
