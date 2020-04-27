import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Body from './components/Body';
import Article from './components/Article';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Body} />
        <Route path="/acontece/:article" exact component={Article} />
      </Switch>
    </BrowserRouter>
  )
}