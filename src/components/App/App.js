import React, { Component } from 'react';
import CounterContainer from '../CounterContainer/CounterContainer';
import './App.css';
import {connect} from "react-redux";

class App extends Component {
  render() {
    return <div>
      <CounterContainer players={this.props.players}/>
    </div>
  }
}

function mapStateToProps(state) {
    return {
        players: state.players
    };
}

export default connect(mapStateToProps, null)(App);
