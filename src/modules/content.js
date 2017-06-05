/**
 * Created by colus on 2017. 6. 2..
 */
import { createAction, handleActions } from 'redux-actions';
import update from 'react-addons-update';
import axios from 'axios';

const GET_USER_INFO = 'my-resume-admin/user-info/GET_USER_INFO';
const GET_USER_INFO_SUCCESS = 'my-resume-admin/user-info/GET_USER_INFO_SUCCESS';
const GET_USER_INFO_FAILURE = 'my-resume-admin/user-info/GET_USER_INFO_FAILURE';
// const SET_USER_INFO = 'my-resume-admin/user-info/SET_USER_INFO';
const GET_WORK_EXPERIENCE = 'my-resume-admin/work-experience/GET_WORK_EXPERIENCE';
const GET_WORK_EXPERIENCE_SUCCESS = 'my-resume-admin/work-experience/GET_WORK_EXPERIENCE_SUCCESS';
const GET_WORK_EXPERIENCE_FAILURE = 'my-resume-admin/work-experience/GET_WORK_EXPERIENCE_FAILURE';
// const SET_WORK_EXPERIENCE = 'my-resume-admin/work-experience/SET_WORK_EXPERIENCE';
const GET_PROJECT_EXPERIENCE = 'my-resume-admin/project-experience/GET_PROJECT_EXPERIENCE';
const GET_PROJECT_EXPERIENCE_SUCCESS = 'my-resume-admin/project-experience/GET_PROJECT_EXPERIENCE_SUCCESS';
const GET_PROJECT_EXPERIENCE_FAILURE = 'my-resume-admin/project-experience/GET_PROJECT_EXPERIENCE_FAILURE';
// const SET_PROJECT_EXPERIENCE = 'my-resume-admin/project-experience/SET_PROJECT_EXPERIENCE';
const GET_EDUCATION = 'my-resume-admin/education/GET_EDUCATION';
const GET_EDUCATION_SUCCESS = 'my-resume-admin/education/GET_EDUCATION_SUCCESS';
const GET_EDUCATION_FAILURE = 'my-resume-admin/education/GET_EDUCATION_FAILURE';
// const SET_EDUCATION = 'my-resume-admin/education/SET_EDUCATION';
const GET_CERTIFICATION = 'my-resume-admin/certification/GET_CERTIFICATION';
const GET_CERTIFICATION_SUCCESS = 'my-resume-admin/certification/GET_CERTIFICATION_SUCCESS';
const GET_CERTIFICATION_FAILURE = 'my-resume-admin/certification/GET_CERTIFICATION_FAILURE';
// const SET_CERTIFICATION = 'my-resume-admin/certification/SET_CERTIFICATION';
const GET_PROFILE = 'my-resume-admin/profile/GET_PROFILE';
const GET_PROFILE_SUCCESS = 'my-resume-admin/profile/GET_PROFILE_SUCCESS';
const GET_PROFILE_FAILURE = 'my-resume-admin/profile/GET_PROFILE_FAILURE';
// const SET_PROFILE = 'my-resume-admin/profile/SET_PROFILE';
const GET_INTEREST = 'my-resume-admin/interest/GET_INTEREST';
const GET_INTEREST_SUCCESS = 'my-resume-admin/interest/GET_INTEREST_SUCCESS';
const GET_INTEREST_FAILURE = 'my-resume-admin/interest/GET_INTEREST_FAILURE';
// const SET_INTEREST = 'my-resume-admin/interest/SET_INTEREST';
const GET_MY_RESUME = 'my-resume-admin/my-resume/GET_MY_RESUME';
const GET_MY_RESUME_SUCCESS = 'my-resume-admin/my-resume/GET_MY_RESUME_SUCCESS';
const GET_MY_RESUME_FAILURE = 'my-resume-admin/my-resume/GET_MY_RESUME_FAILURE';
// const SET_MY_RESUME = 'my-resume-admin/my-resume/SET_MY_RESUME';

const initialState = {
  userInfo: [],
  workExperience: [],
  projectExperience: [],
  education: [],
  certification: [],
  profile: [],
  interest: [],
};

export default handleActions({
  [GET_USER_INFO_SUCCESS]: (state, action) => update(state, {
    userInfo: { $set: action.payload }
  }),
  [GET_WORK_EXPERIENCE_SUCCESS]: (state, action) => update(state, {
    workExperience: { $set: action.payload }
  }),
  [GET_PROJECT_EXPERIENCE_SUCCESS]: (state, action) => update(state, {
    projectExperience: { $set: action.payload }
  }),
  [GET_EDUCATION_SUCCESS]: (state, action) => update(state, {
      education: { $set: action.payload }
  }),
  [GET_CERTIFICATION_SUCCESS]: (state, action) => update(state, {
    certification: { $set: action.payload }
  }),
  [GET_PROFILE_SUCCESS]: (state, action) => update(state, {
    profile: { $set: action.payload }
  }),
  [GET_INTEREST_SUCCESS]: (state, action) => update(state, {
    interest: { $set: action.payload }
  }),
  [GET_MY_RESUME_SUCCESS]: (state, action) => update(state, {
    myResume: { $set: action.payload }
  }),
}, initialState);

export function getUserInfoRequest() {
  return dispatch => {
    dispatch(getUserInfo());
    // API REQUEST
    return axios.get('http://localhost:4000/api/admin/contents/userinfos')
      .then(response => dispatch(getUserInfoSuccess(response.data)))
      .catch(error => dispatch(getUserInfoFailure()));
  };
}
export const getUserInfo = createAction(GET_USER_INFO);
export const getUserInfoSuccess = createAction(GET_USER_INFO_SUCCESS);
export const getUserInfoFailure = createAction(GET_USER_INFO_FAILURE);

export function getWorkExperienceRequest() {
  return dispatch => {
    dispatch(getWorkExperience());
    // API REQUEST
    return axios.get('http://localhost:4000/api/admin/contents/experiences/work')
      .then(response => dispatch(getWorkExperienceSuccess(response.data)))
      .catch(error => dispatch(getWorkExperienceFailure()));
  };
}
export const getWorkExperience = createAction(GET_WORK_EXPERIENCE);
export const getWorkExperienceSuccess = createAction(GET_WORK_EXPERIENCE_SUCCESS);
export const getWorkExperienceFailure = createAction(GET_WORK_EXPERIENCE_FAILURE);

export function getProjectExperienceRequest() {
  return (dispatch) => {
    dispatch(getProjectExperience());
    // API REQUEST
    return axios.get('http://localhost:4000/api/admin/contents/experiences/project')
      .then(response => dispatch(getProjectExperienceSuccess(response.data)))
      .catch(error => dispatch(getProjectExperienceFailure()));
  };
}
export const getProjectExperience = createAction(GET_PROJECT_EXPERIENCE);
export const getProjectExperienceSuccess = createAction(GET_PROJECT_EXPERIENCE_SUCCESS);
export const getProjectExperienceFailure = createAction(GET_PROJECT_EXPERIENCE_FAILURE);

export function getEducationRequest() {
  return (dispatch) => {
    dispatch(getEducation());
    // API REQUEST
    return axios.get('http://localhost:4000/api/admin/contents/educations')
      .then(response => dispatch(getEducationSuccess(response.data)))
      .catch(error => dispatch(getEducationFailure()));
  };
}
export const getEducation = createAction(GET_EDUCATION);
export const getEducationSuccess = createAction(GET_EDUCATION_SUCCESS);
export const getEducationFailure = createAction(GET_EDUCATION_FAILURE);

export function getCertificationRequest() {
  return (dispatch) => {
    dispatch(getCertification());
    // API REQUEST
    return axios.get('http://localhost:4000/api/admin/contents/certifications')
      .then(response => dispatch(getCertificationSuccess(response.data)))
      .catch(error => dispatch(getCertificationFailure()));
  };
}
export const getCertification = createAction(GET_CERTIFICATION);
export const getCertificationSuccess = createAction(GET_CERTIFICATION_SUCCESS);
export const getCertificationFailure = createAction(GET_CERTIFICATION_FAILURE);

export function getProfileRequest() {
  return dispatch => {
    dispatch(getProfile());
    // API REQUEST
    return axios.get('http://localhost:4000/api/admin/contents/profiles')
      .then(response => dispatch(getProfileSuccess(response.data)))
      .catch(error => dispatch(getProfileFailure()));
  };
}
export const getProfile = createAction(GET_PROFILE);
export const getProfileSuccess = createAction(GET_PROFILE_SUCCESS);
export const getProfileFailure = createAction(GET_PROFILE_FAILURE);

export function getInterestRequest() {
  return dispatch => {
    dispatch(getInterest());
    // API REQUEST
    return axios.get('http://localhost:4000/api/admin/contents/interests')
      .then(response => dispatch(getInterestSuccess(response.data)))
      .catch(error => dispatch(getInterestFailure()));
  };
}
export const getInterest = createAction(GET_INTEREST);
export const getInterestSuccess = createAction(GET_INTEREST_SUCCESS);
export const getInterestFailure = createAction(GET_INTEREST_FAILURE);

export function getMyResumeRequest() {
  return dispatch => {
    dispatch(getMyResume());
    // API REQUEST
    return axios.get('http://localhost:4000/api/admin/contents/resumes')
      .then(response => dispatch(getMyResumeSuccess(response.data)))
      .catch(error => dispatch(getMyResumeFailure()));
  };
}

export const getMyResume = createAction(GET_MY_RESUME);
export const getMyResumeSuccess = createAction(GET_MY_RESUME_SUCCESS);
export const getMyResumeFailure = createAction(GET_MY_RESUME_FAILURE);