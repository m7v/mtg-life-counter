import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../helpers/actionCreators';

class Creater extends Component {
  increment() {
    this.props.addPlayer();
  }

  render() {
    return (
      <div className="action action--creater" onClick={() => this.increment()}/>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(null, mapDispatchToProps)(Creater);
