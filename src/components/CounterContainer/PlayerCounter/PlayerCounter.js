import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../helpers/actionCreators';

class PlayerCounter extends Component {
  increment() {
    this.props.increment(this.props.index);
  }

  decrement() {
    this.props.decrement(this.props.index);
  }

  winner() {
    this.props.winner(this.props.index);
  }

  isWinner(player) {
    return player.get('winner');
  }

  render() {
    const player = this.props.player;
    return (
      <div>
        <div>
          <span>Mana: { player.get('manaStack') }</span>
          <span>Name: { player.get('name') }</span>
          <span>Life: { player.get('life') }</span>
          {this.isWinner(player) ?
            <div className="label">Winner!</div> :
            null}
          <div>
            <button onClick={() => this.increment()}>+</button>
            <button onClick={() => this.decrement()}>-</button>
            <button onClick={() => this.winner()}>Winner</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.players
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerCounter);
