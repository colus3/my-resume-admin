/**
 * Created by colus on 2016. 10. 13..
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Interest extends Component {

  constructor(props) {
    super(props);

    this.props.onLoad();
  }

  render() {
    const interest = this.props.data.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.content_id}</td>
          <td>{item.title}</td>
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
            <th>Name</th>
            <th>Order</th>
          </tr>
          </thead>
          <tbody>
          {interest}
          </tbody>
        </table>
      </div>
    );
  }
}

Interest.defaultProps = {
  data: []
};

Interest.propTypes = {
  data: PropTypes.array,
  onLoad: PropTypes.func
};


export default Interest;