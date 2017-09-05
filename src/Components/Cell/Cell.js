import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'



class Cell extends Component {

  render() {
    const cell = this.props
    const messageelected = selected ? 'selected' : '';
      return (
        <div>
        {}
        </div>
      );
    }
  }




  const mapStateToProps = (state, ownprops) => {
    const cell = state.sheet.values
    return {
      row,
    }
  }

  export default connect(
    mapStateToProps,
  )(Message)
