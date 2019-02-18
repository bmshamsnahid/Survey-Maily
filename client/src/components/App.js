import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

function Logout({ history }) {
  return(
    <div>
      This is logout component
    </div>
  );
}

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className='container'>
            <Header />
            <Route exact path='/' component={ Landing } />
            <Route exact path='/surveys' component={ Dashboard } />
            <Route exact path='/api/logout' component={ Logout } />
            <Route path='/surveys/new' component={ SurveyNew } />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
