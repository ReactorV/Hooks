import React, { useState, useMemo, useEffect } from 'react';
import ReactDOM from 'react-dom';

function complexCompute(number) {
    let i = 0;
     while (i < 1000000000) i++;

    return number * 2;
}

const App = () => {
    const [num, setNum] = useState(0);
    const [colored, setColored] = useState(false);

    const computedValue = useMemo(() => {
        return complexCompute(num);
    }, [num]);

    const style = useMemo(() => ({
        color: colored ? 'red': 'black'
    }), [colored]);

    useEffect(() => {
        console.log('style change')
    }, [style]);

    return (
        <>
            <h1 style={style}> Number: {num}</h1>
            <button onClick={() => setNum(prevNum => prevNum + 1)}>+</button>
            <button onClick={() => setNum(prevNum => prevNum - 1)}>-</button>
            <button onClick={() => setColored(prevColor => !prevColor)}>Change color</button>
        </>
    );
};


ReactDOM.render(<App />, document.getElementById('root'));
