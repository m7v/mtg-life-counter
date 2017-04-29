import React from 'react';
import PlayerCounter from './PlayerCounter/PlayerCounter';
import Reseter from './Reseter/Reseter';
import Creater from './Creater/Creater';
import Remover from './Remover/Remover';

export const CounterContainer = ({players}) => <div>
    <div className="actions">
        <Creater/>
        <Remover/>
        <Reseter/>
    </div>
    <div className="playersContainer">
        {players.map((player, key) =>
            <PlayerCounter key={ key } index={key} player={player}/>
        )}
    </div>
</div>;
