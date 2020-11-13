import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../components/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/product" component={Layout}/>
  </Switch>
)

export default Routes;
