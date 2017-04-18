import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../helpers/actionCreators';

class Tournament extends Component {
  endGame() {
    this.props.endGame(this.props.players);
  }

  render() {
    return (
      <button onClick={() => this.endGame()}>End Game</button>
    );
  }
}
function mapStateToProps(state) {
  return {
    tournament: state.tournament,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Tournament);


