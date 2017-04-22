import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../helpers/actionCreators';

class Reseter extends Component {
  resetAll() {
    this.props.resetAll();
  }

  render() {
    return (
      <div className="action action--reset" onClick={() => this.resetAll()}/>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(null, mapDispatchToProps)(Reseter);
