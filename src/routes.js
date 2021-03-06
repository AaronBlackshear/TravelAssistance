import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';

export default (
    <Switch>
        <Route exact path='/' component={LandingPage} />
    </Switch>
)