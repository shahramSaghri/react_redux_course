import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    //To make a call to the geolocation API
    window.navigator.geolocation.getCurrentPosition((postion) => console.Console(postion), (err) => console.count(err));
    return (
        <div>Hi there!</div>
    );
};

ReactDOM.render(<App/>, document.querySelector("#root"));