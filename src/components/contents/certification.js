/**
 * Created by colus on 2016. 10. 12..
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DateFormat, DateTime, DateLocale } from 'dateutils';

class Certification extends Component {

  constructor(props) {
    super(props);

    this.props.onLoad();
  }

  render() {
    const certifications = this.props.data.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.content_id}</td>
          <td>{item.title}</td>
          <td>{DateFormat.format(DateTime.fromDateObject(new Date(item.start_date)), 'Y-m-d', DateLocale.EN)}</td>
          <td>{item.ord}</td>
        </tr>
      );
    });

    return (
      <div className="table-responsive">
        {/*<h4>Certification</h4>*/}
        <table className="table table-striped table-hover">
          <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Start Date</th>
            <th>Order</th>
          </tr>
          </thead>
          <tbody>
          {certifications}
          </tbody>
        </table>
      </div>
    );
  }
}

Certification.defaultProps = {
  data: []
};

Certification.propTypes = {
  data: PropTypes.array,
  onLoad: PropTypes.func
};

export default Certification;