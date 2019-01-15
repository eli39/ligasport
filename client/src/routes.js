import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage';
import LoginPage from './containers/LoginPage';
import Dashboard from './containers/DashboardPage';
import UserPage from './containers/UserPage';
import RolePage from './containers/RolePage';
import LeaguePage from './containers/LeaguePage';
import RegisterRolePage from './containers/RegisterRolePage';
import RegisterLeaguePage from './containers/RegisterLeaguePage';
import RegisterUserPage from './containers/RegisterUserPage';

export default (
  <Route>
    <Route path="login" component={LoginPage}/>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" component={Dashboard}/>
      <Route path="dashboard/user" component={UserPage}/>
      <Route path="dashboard/user/register" component={RegisterUserPage}/>
      <Route path="dashboard/role" component={RolePage}/>
      <Route path="dashboard/role/register" component={RegisterRolePage}/>
      <Route path="dashboard/league" component={LeaguePage}/>
      <Route path="dashboard/league/register" component={RegisterLeaguePage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
