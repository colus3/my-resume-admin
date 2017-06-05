/**
 * Created by colus on 2016. 10. 12..
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DateFormat, DateTime, DateLocale } from 'dateutils';

class UserInfo extends Component {

  constructor(props) {
    super(props);

    this.props.onLoad();
  }

  render() {
    const userInfos = this.props.data.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.user_id}</td>
          <td>{item.user_name}</td>
          <td>{item.moto}</td>
          <td className="col-md-1">{item.email}</td>
          <td className="col-md-2">{item.phone}</td>
          <td className="col-md-1">{DateFormat.format(DateTime.fromDateObject(new Date(item.birth_date)), 'Y-m-d', DateLocale.EN)}</td>
          <td>{item.address}</td>
          <td>{item.image}</td>
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
            <th>Moto</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>Birthday</th>
            <th>Address</th>
            <th>Image Path</th>
          </tr>
          </thead>
          <tbody>
          {userInfos}
          </tbody>
        </table>
      </div>
    );
  }
}

UserInfo.defaultProps = {
  data: []
};

UserInfo.propTypes = {
  data: PropTypes.array,
  onLoad: PropTypes.func
};

export default UserInfo;