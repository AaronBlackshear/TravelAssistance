import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Test from './components/Test';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/test' component={Test} />
    </Switch>
)