//Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';


//The following function is an example of
//a fucntion that can be called inside a jsx
//using {} it can be used insted for the button
//text
// function getButtonText() {
//     return 'Click on me!';
// }

//Create a react component
const App = () => {
    //if you try to following variable as the 
    //button text, browser throws an error
    //saying Object are not valid as a react child
    //it means that you can not print or render a
    //JavaScript object. You can use a JavaScript object
    //only as properties of react components or html tags!!!
    //const buttonText = {text: 'Click me'}

    //you can; however, use a JavaScript object as an
    //attribute of an element, such as react component or
    //any html like element for instalnce:
    const style = {backgroundColor: 'blue', color: 'white'};
    
    //It worth mentionning that you can render or print
    //a single attribute or property of a JavaScript object
    //in jsx using the dot operator such that
    // {objectName.attributeName}
    const buttonText = 'Click Me!';
    
    return (
        <div>
            <label className="label" htmlFor="name">Enter Name:</label>
            <input id="name" type="text" />
            <button style={style}>
                {buttonText}
            </button>
        </div>
    );
};
// take the react component and show it on the screen
ReactDOM.render(
    <App />, document.querySelector('#root')
);
