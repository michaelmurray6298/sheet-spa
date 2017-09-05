import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
// import Cell from '../Cell';



class Row extends Component {

  render() {
    const row = this.props
    const messageelected = selected ? 'selected' : '';
      return (
        <div>
        {}
        </div>
      );
    }
  }




  const mapStateToProps = (state) => {
    const row = state.sheet.values
    return {
      row,
    }
  }

  export default connect(
    mapStateToProps,
  )(Message)
