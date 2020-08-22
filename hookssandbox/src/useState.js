import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <HookSwitcher />
        </div>
    );
};

const HookSwitcher = () => {
    const [color, setColor] = useState('white');
    const [fontSize, setFontSize] = useState(14);

    return (
        <div style={{ padding: '20px', backgroundColor: color, fontSize: `${fontSize}px`}}>
            Hooks
            <button onClick={() => setColor('gray')}>Dark</button>
            <button onClick={() => setColor('white')}>Light</button>
            <button onClick={() => setFontSize((size) => size + 1)}>+</button>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
