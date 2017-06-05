/**
 * Created by colus on 2016. 10. 12..
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

class Profile extends Component {

  constructor(props) {
    super(props);

    this.props.onLoad();
  }

  render() {
    const profiles = this.props.data.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.content_id}</td>
          <td><ReactMarkdown source={item.contents}/></td>
        </tr>
      );
    });

    return (
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
          <tr>
            <th>Id</th>
            <th>About Me</th>
          </tr>
          </thead>
          <tbody>
          {profiles}
          </tbody>
        </table>
      </div>
    );
  }
}

Profile.defaultProps = {
  data: []
};

Profile.propTypes = {
  data: PropTypes.array,
  onLoad: PropTypes.func
};

export default Profile;