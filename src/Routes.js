import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import User from './components/User/index';

export class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/users' component={Users} />
        <Route exact path='/users/:id' component={User} />
      </div>
    );
  }
}

export default withRouter(Routes);
