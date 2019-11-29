import React from 'react';
import { Switch, Route } from 'react-router';
import MainPage from '../pages/MainPage/MainPage';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import AboutPage from '../pages/AboutPage';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route path="/about" component={AboutPage} />
        </Switch>
    );
}

export default Routes;
