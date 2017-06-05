/**
 * Created by colus on 2016. 10. 6..
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { Cookies } from 'react-cookie';

import { UserInfo, Experience, Education, Certification, Profile, Interest } from './contents';
import * as contentReq from '../modules/content';

class Content extends Component {

  render() {
    const loginInfo = new Cookies().get('login_info');
    return (
      <Grid>
        { loginInfo.isLoggedIn || this.props.history.push('/login') }
        <Row>
          <Col xs={12}>
            <h3>My Content</h3>
            <div className="tabbable">
              <ul className="nav nav-tabs">
                <li className="active"><a href="#user_info" data-toggle="tab">UserInfo <span className="badge">{this.props.userInfo.length}</span></a></li>
                <li><a href="#work_experience" data-toggle="tab">Work Experience <span className="badge">{this.props.workExperience.length}</span></a></li>
                <li><a href="#project_experience" data-toggle="tab">Project Experience <span className="badge">{this.props.projectExperience.length}</span></a></li>
                <li><a href="#interest" data-toggle="tab">Interest <span className="badge">{this.props.interest.length}</span></a></li>
                <li><a href="#education" data-toggle="tab">Education <span className="badge">{this.props.education.length}</span></a></li>
                <li><a href="#certification" data-toggle="tab">Certification <span className="badge">{this.props.certification.length}</span></a></li>
                <li><a href="#profile" data-toggle="tab">Profile <span className="badge">{this.props.profile.length}</span></a></li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="user_info">
                  <UserInfo data={this.props.userInfo} onLoad={this.props.getUserInfoRequest}/>
                </div>
                <div className="tab-pane" id="work_experience">
                  <Experience data={this.props.workExperience} onLoad={this.props.getWorkExperienceRequest}/>
                </div>
                <div className="tab-pane" id="project_experience">
                  <Experience data={this.props.projectExperience} onLoad={this.props.getProjectExperienceRequest}/>
                </div>
                <div className="tab-pane" id="interest">
                  <Interest data={this.props.interest} onLoad={this.props.getInterestRequest}/>
                </div>
                <div className="tab-pane" id="education">
                  <Education data={this.props.education} onLoad={this.props.getEducationRequest}/>
                </div>
                <div className="tab-pane" id="certification">
                  <Certification data={this.props.certification} onLoad={this.props.getCertificationRequest}/>
                </div>
                <div className="tab-pane" id="profile">
                  <Profile data={this.props.profile} onLoad={this.props.getProfileRequest}/>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  };
};

Content.defaultProps = {
  userInfo: [],
  workExperience: [],
  projectExperience: [],
  education: [],
  certification: [],
  profile: [],
  interest: []
};

Content.propTypes = {
  userInfo: PropTypes.array,
  workExperience: PropTypes.array,
  projectExperience: PropTypes.array,
  education: PropTypes.array,
  certification: PropTypes.array,
  profile: PropTypes.array,
  interest: PropTypes.array,
  getUserInfoRequest: PropTypes.func,
  getWorkExperienceRequest: PropTypes.func,
  getProjectExperienceRequest: PropTypes.func,
  getEducationRequest: PropTypes.func,
  getCertificationRequest: PropTypes.func,
  getProfileRequest: PropTypes.func,
  getInterestRequest: PropTypes.func,
  history: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.content.userInfo,
    workExperience: state.content.workExperience,
    projectExperience: state.content.projectExperience,
    education: state.content.education,
    certification: state.content.certification,
    profile: state.content.profile,
    interest: state.content.interest
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfoRequest: () => dispatch(contentReq.getUserInfoRequest()),
    getWorkExperienceRequest: () => dispatch(contentReq.getWorkExperienceRequest()),
    getProjectExperienceRequest: () => dispatch(contentReq.getProjectExperienceRequest()),
    getEducationRequest: () => dispatch(contentReq.getEducationRequest()),
    getCertificationRequest: () => dispatch(contentReq.getCertificationRequest()),
    getProfileRequest: () => dispatch(contentReq.getProfileRequest()),
    getInterestRequest: () => dispatch(contentReq.getInterestRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);