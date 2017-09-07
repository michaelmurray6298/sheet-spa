import React, { Component } from 'react';
import { connect } from 'react-redux';


class Row extends Component {
  render() {
    return (
      <div />
    );
  }
}


const mapStateToProps = (state) => {
  const row = state.sheet.values;
  return {
    row,
  };
};

export default connect(
  mapStateToProps,
)(Row);
