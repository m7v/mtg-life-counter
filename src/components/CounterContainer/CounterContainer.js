import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../helpers/action_creators';
import PlayerCounter from "./Counter/Counter";
import Reseter from "./Reseter/Reseter";

class CounterContainer extends Component {
  increment() {
    this.props.addCounter();
  }
  decrement() {
    this.props.removeCounter();
  }
  render() {
    return <div>
      <div>
        {/*<button onClick={() => this.increment()}>Add Counter</button>*/}
        {/*<button onClick={() => this.decrement()}>Remove Counter</button>*/}
        <Reseter/>
      </div>
      <div>
        {this.props.players.map((player, key) => <PlayerCounter key={ key } index={key} player={player}/>)}
      </div>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
