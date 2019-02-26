import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import Landing from "./components/Landing"
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import CreateTodo from './components/CreateTodo';


class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Dashboard} />
          <Route exact path="/todo/new" component={CreateTodo} />
          
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
