import React, { Component } from 'react';

export class LifeCounter extends Component {
  render() {
    return (
      <div className="life-counter--container">
        <figure className="life-counter">
          <span className="life-total">{ this.props.life }</span>
        </figure>
        <div className="btn btn-decrement" onClick={() => this.props.decrementFunc()}/>
        <div className="btn btn-increment" onClick={() => this.props.incrementFunc()}/>
      </div>
    );
  }
}

export default LifeCounter;
