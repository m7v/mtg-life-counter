import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../helpers/action_creators';

class Reseter extends Component {
  resetAll() {
    this.props.resetAll();
  }

  render() {
    return (
      <button onClick={() => this.resetAll()}>Reset All</button>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(null, mapDispatchToProps)(Reseter);
