import React from 'react';

function Counter({counter, inc, dec, ran}) {
    return (
        <div className="container">
            <h1 className="counter">Counter: <strong>{counter}</strong></h1>
            <button className="btn btn-primary" onClick={inc}>INCREMENT</button>
            <button className="btn btn-danger" onClick={dec}>DECREMENT</button>
            <button className="btn btn-info" onClick={ran}>RANDOM</button>
        </div>
    );
}

export default Counter;