import React, { Component } from 'react';
import PlayerCounter from './PlayerCounter/PlayerCounter';
import Reseter from './Reseter/Reseter';
import Creater from './Creater/Creater';
import Remover from './Remover/Remover';

export default class CounterContainer extends Component {
  render() {
    return <div>
      <div className="actions">
        <Creater/>
        <Remover/>
        <Reseter/>
      </div>
      <div className="playersContainer">
        {this.props.players.map((player, key) =>
            <PlayerCounter key={ key } index={key} player={player}/>
        )}
      </div>
    </div>
  }
}
