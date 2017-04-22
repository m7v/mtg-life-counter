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

  render() {
    const player = this.props.player;
    return (
      <div className="icon icon-player">
        <div className="avatar--container">
          <div className="btn avatar-controls btn-next" onClick={() => this.increment()}></div>
          <div className="btn avatar-controls btn-prev" onClick={() => this.decrement()}></div>
          <figure>
            <div className="line"></div>
            <div>
              <img className="full" src="http://38.media.tumblr.com/5cb16bcbf2428b8f33f011383279b837/tumblr_myzzqeaGuA1tophcho1_1280.jpg"/>
              <figcaption><h3>{ player.get('name') }</h3></figcaption>
            </div>
          </figure>
        </div>
        <div className="life-counter--container">
          <figure className="life-counter">
            <span className="life-total">{ player.get('life') }</span>
          </figure>
          <div className="btn btn-increment" onClick={() => this.increment()}></div>
          <div className="btn btn-decrement" onClick={() => this.decrement()}></div>
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
