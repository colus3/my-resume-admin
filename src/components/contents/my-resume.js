/**
 * Created by colus on 2016. 10. 14..
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyResume extends Component {

  componentWillMount() {
    this.props.onLoad();
  }

  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const myResumes = this.props.data.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.resume_id}</td>
          <td>{item.resume_name}</td>
          <td>{item.default_yn === 'Y' ? 'true' : 'false'}</td>
          <td>{item.user_id}</td>
          <td>{item.resume_short_url}</td>
        </tr>
      );
    });

    return (
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Default</th>
            <th>UserId</th>
            <th>Resume URL</th>
          </tr>
          </thead>
          <tbody>
          {myResumes}
          </tbody>
        </table>
      </div>
    );
  }
}

MyResume.defaultProps = {
  data: []
};

MyResume.propTypes = {
  data: PropTypes.array,
  onLoad: PropTypes.func
};

export default MyResume;