import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../helpers/actionCreators';

class Remover extends Component {
  decrement() {
    this.props.removePlayer();
  }

  render() {
    return (
      <div className="action action--remover" onClick={() => this.decrement()}/>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(null, mapDispatchToProps)(Remover);
