/**
 * Created by colus on 2016. 10. 3..
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginRequest } from '../modules/authentication';
import { Grid, Col, Row, Button, InputGroup, FormControl } from 'react-bootstrap';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      password: ''
    };
  }

  handleLoginButton() {
    console.log(`Login Button Clicked ${this.state.userId} : ${this.state.password}`);

    let id = this.state.userId;
    let password = this.state.password;

    this.props.loginRequest(id, password)
      .then(() => {
        if ( this.props.status === 'FAILURE' ) {
          alert('로그인 실패');
          return false;
        }

        if ( this.props.isLoggedIn ) {
          console.log('redirect home');
          this.props.history.push('/');
        }
      }
    );
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  render() {

    const directLoginForm = (
        <div>
          <Row className="omb_row-sm-offset-3">
            <Col xs={12} sm={6}>
              <InputGroup>
                <InputGroup.Addon><i className="glyphicon glyphicon-user"/></InputGroup.Addon>
                <FormControl type="text" name="userId" placeholder="email address" value={this.state.userId} onChange={this.handleChange.bind(this)}/>
              </InputGroup>
              <span className="help-block"/>

              <InputGroup className="input-group">
                <InputGroup.Addon><i className="glyphicon glyphicon-lock"/></InputGroup.Addon>
                <FormControl type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange.bind(this)}/>
              </InputGroup>
              <span className="help-block"/>

              <Button bsStyle="primary" bsSize="large" block onClick={this.handleLoginButton.bind(this)}>Login</Button>
            </Col>
          </Row>
          <Row className="omb_row-sm-offset-3">
            <Col  xs={12} sm={6}>
              <p className="omb_forgotPwd">
                <a href="">Forgot password?</a>
              </p>
            </Col>
          </Row>
        </div>
    );

    return (
      <Grid>
        <div className="omb_login">
          <h3 className="omb_authTitle">Login or <a href="">Sign up</a></h3>
          {directLoginForm}
        </div>
      </Grid>
    );
  }
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool,
  status: PropTypes.string,
  currentUser: PropTypes.string,
  token: PropTypes.string,
  loginRequest: PropTypes.func,
  history: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    status: state.authentication.status,
    isLoggedIn: state.authentication.isLoggedIn,
    currentUser: state.authentication.currentUser,
    token: state.authentication.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (id, pw) => dispatch(loginRequest(id,pw))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);