import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { counterActions } from '../store/counter-Slice';

export default function Counter() {

    const dispatch = useDispatch();

    const clock = useSelector(state => state.counter.clock);

    const increase = () => {
        dispatch(counterActions.increase())
    }

    const decrease = () => {
        dispatch(counterActions.decrease())
    }

    return (
        <>
            {clock}
            <button onClick={increase}>
                +
            </button>
            <button onClick={decrease}>
                -
            </button>
        </>
    );
}
