import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [value, setValue] = useState(1);
    const [visible, setVisible] = useState(true);

    if (visible) {
        return (
            <div>
                <button onClick={() => setValue((v) => v + 1)}>+</button>
                <button onClick={() => setVisible(false)}>Hide</button>
                <PlanetInfo id={value}/>
            </div>
        )
    } else {
        return <button onClick={() => setVisible(true)}>Show</button>
    }
};

const PlanetInfo = ({id}) => {
    const [name, setName] = useState(null);

    useEffect(() => {
        let cancelled = false;

        fetch(`https://swapi.dev/api/planets/${id}`)
                .then(response => response.json())
                .then(data => !cancelled && setName(data.name));

        return () => cancelled = true;
        }, [id]);

      return (
          <div>{id} - Planet {name}</div>
      );
};

const HookCounter = ({ value }) => {
    useEffect(() => {
        console.log('mount');

        return () => console.log('unmount')
    }, []); //componentDidMount componentWillUnmount

    useEffect(() => {console.log("update")}); //componentDidUpdate

    return <div>{value}</div>
};

const Notification = () => {
   const [isNotificationShown, setVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(false), 1500);

        return () => clearTimeout(timeout);
    }, []);

    let output = '';

    if (isNotificationShown) {
        output = (
            <div>Hello</div>
        );
    }

    return output;
};

ReactDOM.render(<App />, document.getElementById('root'));
