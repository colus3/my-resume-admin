/**
 * Created by colus on 2016. 9. 29..
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Jumbotron } from 'react-bootstrap';

import { Cookies } from 'react-cookie';

class Home extends Component {

  componentWillMount() {
    const loginInfo = new Cookies().get('login_info');
    if ( ! loginInfo || ! loginInfo.isLoggedIn ) {
      console.log('componentWillMount : redirect to login page.');
      this.props.history.push('/login');
    }
  }

  componentDidUpdate() {
    const loginInfo = new Cookies().get('login_info');
    if ( ! loginInfo || ! loginInfo.isLoggedIn ) {
      console.log('componentDidUpdate : redirect to login page.');
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <Jumbotron>
        <Grid>
          <Row>
            <div className="jumbotron">
              <h1>Welcome My Resume.</h1>
              <p>Let's make a pretty resume yourself</p>
              <p><a className="btn btn-primary btn-lg" href="" role="button">Learn more</a></p>
            </div>
          </Row>
        </Grid>
      </Jumbotron>
    );
  };
}

Home.propTypes = {
  history: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);