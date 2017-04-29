import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../helpers/actionCreators';

const Reseter = ({resetAll}) =>
    <div className="action action--reset" onClick={resetAll}/>;

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(Reseter);
