import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../helpers/actionCreators';
import PlayerCounter from './PlayerCounter/PlayerCounter';
import Reseter from './Reseter/Reseter';
import Creater from './Creater/Creater';
import Remover from './Remover/Remover';
import Tournament from './Tournament/Tournament';

class CounterContainer extends Component {
  render() {
    return <div>
      <div>
        <Creater/>
        <Remover/>
        <Reseter/>
      </div>
      <div className="playersContainer">
        {this.props.players.map((player, key) => <PlayerCounter key={ key } index={key} player={player}/>)}
      </div>
      <Tournament players={ this.props.players }/>
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
