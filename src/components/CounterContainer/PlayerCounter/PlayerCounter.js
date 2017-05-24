import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../helpers/actionCreators';
import Avatar from './Avatar/Avatar';
import LifeCounter from './LifeCounter/LifeCounter';

const PlayerCounter = ({ index, player, nextHero, prevHero, increment, decrement }) =>
    <div className="icon icon-player">
        <Avatar currentHero={player.get('currentHero')}
                nextHero={() => nextHero(index)}
                prevHero={() => prevHero(index)}/>
        <LifeCounter life={player.get('life')}
                     increment={() => increment(index)}
                     decrement={() => decrement(index)}/>
    </div>;

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(PlayerCounter);
