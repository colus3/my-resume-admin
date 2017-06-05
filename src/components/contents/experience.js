/**
 * Created by colus on 2016. 10. 12..
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DateFormat, DateTime, DateLocale } from 'dateutils';

class Experience extends Component {

  constructor(props) {
    super(props);

    this.props.onLoad();
  }

  render() {
    const experiences = this.props.data.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.content_id}</td>
          <td>{item.title}</td>
          <td>{item.contents}</td>
          <td>{item.type}</td>
          <td>{item.labels}</td>
          <td className="col-md-1">{DateFormat.format(DateTime.fromDateObject(new Date(item.start_date)), 'Y-m-d', DateLocale.EN)}</td>
          <td className="col-md-1">{DateFormat.format(DateTime.fromDateObject(new Date(item.end_date)), 'Y-m-d', DateLocale.EN)}</td>
          <td>{item.ord}</td>
        </tr>
      );
    });

    return (
      <div className="table-responsive">
        {/*<h4>Experience</h4>*/}
        <table className="table table-striped table-hover">
          <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Content</th>
            <th>Type</th>
            <th>Labels</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Order</th>
          </tr>
          </thead>
          <tbody>
          {experiences}
          </tbody>
        </table>
      </div>
    );
  }
}

Experience.defaultProps = {
  data: []
};

Experience.propTypes = {
  data: PropTypes.array,
  onLoad: PropTypes.func
};

export default Experience;