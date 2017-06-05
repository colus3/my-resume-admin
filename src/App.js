/**
 * Created by colus on 2016. 9. 29..
 */
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, Login, Content, Resume, About, NotFound, Menu } from './components';

const App = () => {
  return (
    <Router>
      <div>
        <Menu/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/content' component={Content}/>
          <Route path='/Resume' component={Resume}/>
          <Route path='/about' component={About}/>
          <Route path='/logout' />
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);