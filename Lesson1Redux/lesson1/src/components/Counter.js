import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../redux/counterActions';

const Counter = ({value, increment, decrement, reset}) => (
    <div>
        <h1>{value}</h1>
        <div>
            <button onClick={() =>  increment(5)}>increment</button>
            <button onClick={() =>  decrement(5)}>decrement</button>
            <button onClick={() => reset()}>reset</button>
        </div>
    </div>
);

const mapStateToProps = state => ({
    value: state.cunterValue
})

const mapDispatchToProps = { increment, decrement, reset } 

export default connect(mapStateToProps, mapDispatchToProps)(Counter)