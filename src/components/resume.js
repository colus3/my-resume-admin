/**
 * Created by colus on 2016. 10. 6..
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { Cookies } from 'react-cookie';

import { MyResume } from './contents';
import { getMyResumeRequest } from '../modules/content';

const Resume = (props) => {
  const loginInfo = new Cookies().get('login_info');
  return (
    <Grid>
      {loginInfo.isLoggedIn || props.history.push('/login')}
      <Row>
        <Col xs={12}>
          <h3>My Resume</h3>
          <MyResume data={props.myResume} onLoad={getMyResumeRequest}/>
        </Col>
      </Row>
    </Grid>
  );
};

Resume.propTypes = {
  myResume: PropTypes.array,
  history: PropTypes.object,
  getMyResumeRequest: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    myResume: state.content.myResume
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getMyResumeRequest: () => dispatch(getMyResumeRequest()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Resume);