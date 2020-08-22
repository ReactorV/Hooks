import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const inputEl = useRef(null);
    const onButtonClick = () => inputEl.current.focus();

    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Установить фокус на поле ввода</button>
        </>
    );
};


ReactDOM.render(<App />, document.getElementById('root'));
