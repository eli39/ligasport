import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
require('./favicon.ico');
import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import '../node_modules/font-awesome/scss/font-awesome.scss';
import '../node_modules/ionicons/dist/scss/ionicons.scss';
import './styles/AdminLTE.scss';
import './styles/skin.scss';
import './styles/font.scss';
import './styles/styles.scss';
render(
    <Router routes={routes} history={browserHistory} />,
    document.getElementById('app')
);
import '../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js';
import '../node_modules/admin-lte/dist/js/adminlte.js';
