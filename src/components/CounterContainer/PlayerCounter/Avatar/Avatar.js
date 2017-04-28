import React, {Component} from 'react';

class Avatar extends Component {
  render() {
    const hero = this.props.currentHero;
    return (
      <div className="avatar--container">
        <div className="btn avatar-controls btn-next" onClick={this.props.nextHero}/>
        <div className="btn avatar-controls btn-prev" onClick={this.props.prevHero}/>
        <figure>
          <div className={"line"}/>
          <div>
            <div className={"full " + hero.class}/>
            <figcaption><h3>{ hero.name }</h3></figcaption>
          </div>
        </figure>
      </div>
    );
  }
}

export default Avatar;
