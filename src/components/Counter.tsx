import React, {useState} from 'react';
import classes from  './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => prev - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button className={classes.btn} onClick={decrement}>dec</button>
            <button className={classes.btn} onClick={increment}>inc</button>
        </div>
    );
};

export default Counter;