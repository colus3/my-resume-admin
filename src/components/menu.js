/**
 * Created by colus on 2016. 9. 29..
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import { Cookies } from 'react-cookie';

import { logoutRequest } from '../modules/authentication';

class Menu extends Component {

  handleLogout() {
    this.props.logoutRequest().then(
        () => {
          console.log('logout');
          this.forceUpdate();
        }
    );
  }

  componentWillUpdate() {
    console.log('Menu componentWillUpdate', new Cookies().get('login_info'));
  }

  render() {
    const loginInfo = new Cookies().get('login_info');
    const menuItem = loginInfo && loginInfo.isLoggedIn ? (
        <ul className="nav navbar-nav navbar-right">
          <li><NavLink exact to='/'>Home</NavLink></li>
          <li><NavLink to='/content'>Content</NavLink></li>
          <li><NavLink to='/resume'>Resume</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><Link to='' onClick={this.handleLogout.bind(this)}>Logout</Link></li>
        </ul>
      ) :
      (
        <ul className="nav navbar-nav navbar-right">
          <li><NavLink exact to='/login'>Login</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
        </ul>
      );

    return (
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <Link className=" navbar-brand" to='/'>My Resume</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            {menuItem}
          </Navbar.Collapse>
        </Navbar>
    );
  };
}

Menu.propTypes = {
  isLoggedIn: PropTypes.bool,
  logoutRequest: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.authentication.isLoggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutRequest: () => dispatch(logoutRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);