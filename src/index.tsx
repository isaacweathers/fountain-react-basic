/// <reference path="../typings/index.d.ts" />

import 'es6-promise';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Main} from './app/main';

import './index.styl';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Main}/>
  </Router>,
  document.getElementById('root')
);
