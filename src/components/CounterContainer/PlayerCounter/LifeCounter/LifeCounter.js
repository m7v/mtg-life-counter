import React from 'react';

const LifeCounter = ({ life, decrement, increment }) =>
    <div className="life-counter--container">
        <figure className="life-counter">
            <span className="life-total">{ life }</span>
        </figure>
        <div className="btn life-actions btn-decrement" onClick={decrement}/>
        <div className="btn life-actions btn-increment" onClick={increment}/>
    </div>;

export default LifeCounter;
