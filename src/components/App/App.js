import React from 'react';
import { connect } from 'react-redux';
import CounterContainer from '../CounterContainer/CounterContainer';
import './App.css';

const App = ({ players }) => <div>
    <CounterContainer players={players}/>
</div>;

function mapStateToProps(state) {
    return {
        players: state.players,
    };
}

export default connect(mapStateToProps, null)(App);
