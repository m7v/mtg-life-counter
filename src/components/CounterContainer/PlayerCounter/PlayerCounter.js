import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../helpers/actionCreators';
import Avatar from "./Avatar/Avatar";
import LifeCounter from "./LifeCounter/LifeCounter";

class PlayerCounter extends Component {
  increment() {
    this.props.increment(this.props.index);
  }

  decrement() {
    this.props.decrement(this.props.index);
  }

  nextHero() {
    this.props.nextHero(this.props.index);
  }

  prevHero() {
    this.props.prevHero(this.props.index);
  }

  render() {
    const player = this.props.player;
    return (
      <div className="icon icon-player">
        <Avatar currentHero={player.get('currentHero')}
                nextHero={this.props.nextHero.bind(this, this.props.index)}
                prevHero={this.props.prevHero.bind(this, this.props.index)}/>
        <LifeCounter life={player.get('life')}
                     incrementFunc={this.increment.bind(this)}
                     decrementFunc={this.decrement.bind(this)}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(null, mapDispatchToProps)(PlayerCounter);
