/**
 * Created by colus on 2016. 10. 12..
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DateFormat, DateTime, DateLocale } from 'dateutils';

class Education extends Component {

  constructor(props) {
    super(props);

    this.props.onLoad();
  }

  render() {
    const educations = this.props.data.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.content_id}</td>
          <td>{item.title}</td>
          <td>{DateFormat.format(DateTime.fromDateObject(new Date(item.start_date)), 'Y-m-d', DateLocale.EN)}</td>
          <td>{DateFormat.format(DateTime.fromDateObject(new Date(item.end_date)), 'Y-m-d', DateLocale.EN)}</td>
          <td>{item.ord}</td>
        </tr>
      );
    });

    return (
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Order</th>
          </tr>
          </thead>
          <tbody>
          {educations}
          </tbody>
        </table>
      </div>
    );
  }
}

Education.defaultProps = {
  data: []
};

Education.propTypes = {
  data: PropTypes.array,
  onLoad: PropTypes.func
};

export default Education;