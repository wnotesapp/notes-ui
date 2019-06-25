import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './app';

const history = createBrowserHistory();

render(
  <Router history={history}>
    <Switch>
      <App />
    </Switch>
  </Router>, document.getElementById('notes-start'));