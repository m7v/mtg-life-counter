import React from 'react';
import { CounterContainer } from '../CounterContainer/CounterContainer';
import './App.css';
import {connect} from 'react-redux';

const App = ({players}) => <div>
    <CounterContainer players={players}/>
</div>;

function mapStateToProps(state) {
    return {
        players: state.players
    };
}

export default connect(mapStateToProps, null)(App);
