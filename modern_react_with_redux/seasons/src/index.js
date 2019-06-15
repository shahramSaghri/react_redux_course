import React from 'react';
import ReactDOM from 'react-dom';

/*
const App = () => {
    
    window.navigator.geolocation.getCurrentPosition(
        (postion) => console.log(postion), //Success callback
        (err) => console.log(err) //failure callback
        ); 
        return <div>Latitude:   </div>
};
*/  

class App extends React.Component {
    
    constructor( ) {

    }
    
    
    
    //React says we have to define render!!
    render() {
        /**
     * To make a call to the geolocation API and access the
     * current location of the user we need to call the 
     * getCurrentPosition() method via the navigator.geolocation 
     * object that is stored in window object of the browser.
     * (window object is not nodejs object). 
     * The first argument of getCurrentPosiotion() function is a
     * callback function that gets called anytime the current
     * physical location of the client is successfully returned.
     * ;therefore, the first callback function is frequently
     * referred to as success callback.
     * The second argument; though, is frequently referred to
     * as failure callback, since it gets called if the 
     * getCurrentPosition() function is unanle to determine
     * the users current location.
     * You can find more information about this function
     * at Geolocation API documentaion @ developer.mozilla.org
     * This function will not immediately return the user's 
     * current location, it takes a few seconds to find the
     * position of the user.
     * 
     */
    window.navigator.geolocation.getCurrentPosition(
        /**
         * The follwoing position object contains information
         * about the user location such as, latitude, altitude
         * timestamp and etc.
         */
        (postion) => console.log(postion), //Success callback
        (err) => console.log(err) //failure callback
        ); 
        return <div>Latitude: </div>
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));