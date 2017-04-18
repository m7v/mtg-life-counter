import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../helpers/actionCreators';

class Creater extends Component {
  increment() {
    this.props.addPlayer('new Player', 'www');
  }

  render() {
    return (
      <button onClick={() => this.increment()}>Add Player</button>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(null, mapDispatchToProps)(Creater);
