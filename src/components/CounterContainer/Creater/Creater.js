import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../helpers/actionCreators';

const Creater = ({addPlayer}) =>
    <div className="action action--creater" onClick={addPlayer}/>;

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(Creater);
