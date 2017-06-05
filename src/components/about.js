/**
 * Created by colus on 2016. 10. 6..
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row } from 'react-bootstrap';

const About = ({isLoggedIn}) => {
  return (
    <Grid>
      <Row>
        <h1>About</h1>
      </Row>
    </Grid>
  )
};

About.propTypes = {
  isLoggedIn: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.authentication.status.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);