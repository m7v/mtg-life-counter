import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../helpers/action_creators';

class PlayerCounter extends Component {
  increment() {
    this.props.increment(this.props.index);
  }
  decrement() {
    this.props.decrement(this.props.index);
  }

  render() {
    console.log(this.props);
    const { life, manaStack, name } = this.props;
    return (
      <div>
        <div>
          <span>Mana: { manaStack }</span>
          <span>Name: { name }</span>
          Life: { life }
          <div>
            <button onClick={() => this.increment()}>+</button>
            <button onClick={() => this.decrement()}>-</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(null, mapDispatchToProps)(PlayerCounter);
