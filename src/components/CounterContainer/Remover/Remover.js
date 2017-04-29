import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../helpers/actionCreators';

const Remover = ({decrement}) =>
    <div className="action action--remover" onClick={decrement}/>;

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(Remover);
