import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisply from './SeasonDisply'
import Spinner from './Spinner';



/**
     * To make a call to the geolocation API and access the
     * current location of the user we need to call the 
     * getCurrentPosition() method via the navigator.geolocation 
     * object that is stored in window object of the browser.
     * (window object is not a nodejs object). 
     * The first argument of getCurrentPosiotion() method is a
     * callback function that gets called anytime the current
     * physical location of the client is successfully returned.;therefore, 
     * the first callback function is frequently
     * referred to as success callback.
     * The second argument; though, is frequently referred to
     * as failure callback, since it gets called if the 
     * getCurrentPosition() method is unable to determine
     * the users current location.
     * You can find more information about this function
     * at Geolocation API documentaion @ developer.mozilla.org
     * This function will not immediately return the user's 
     * current location, it takes a few seconds to find the
     * position of the user.
     */
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
    
    constructor(props) {
        /**
         * The App component is borrwoing functionality
         * from React.Component class which it extends.
         * The React.Component has a constructor of its
         * own that has some amount of setup or some code
         * inside of it. When we define a constructor method inside
         * of our App class we are essentially overriding
         * the constructor method of the
         * React.Component class. But we still want to make
         * sure that all the codes inside the React.Component's
         * constructor is called. So to make sure the parent's
         * constructor is called we call the super method with
         * props. Super is a refrence to parants constuructor 
         * function
         */
        super(props);

        //initializing the state object
        //THIS IS THE ONLY TIME THAT WE DO DIRECT ASSIGNMENT
        //OF THE STATE
        this.state = {
            lat: null, 
            errorMessage: ''
        };
    }
/*
    //you can alternatively initialize the state object without using
    //the constructor such that:
    state = {
        lat: null,
        errorMessage: ''
    }
    what happens is that bable translate your above state
    object and builds the exact same constructor you have 
    above.
*/
 
    componentDidMount() {
        console.log('My component was rendered to the screen');
        window.navigator.geolocation.getCurrentPosition(
            /**
             * The follwoing position object contains information
             * about the user location such as, latitude, altitude
             * timestamp and etc.
             */
            (position) => {
                //to update our state we called setState() !!!
                this.setState({ lat: position.coords.latitude }); 
            }, //Success callback
            
            /**
             * Here and in this case the proper way of
             * handeling any possible error that can be
             * not getting the users location is to 
             * let the user know that an error has occured and then
             * try to get the state again. Rerendering
             * the message also can be done using setState()
             * such that
             */
            (err) => {
                this.setState({ errorMessage: err.message });
            } //failure callback
        );
    }

    componentDidUpdate() {
        console.log('My Component was just updated -it rerendered!');
        
    }

    
    
    
    //React says we have to define render!!
    render() {
        //The follwoing is the instance of conditional
        //rendering
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        
        if (!this.state.errorMessage && this.state.lat) {
            //instead just rendering the Latitude we want
            //to use the latitude to derermine the season 
            //of the hemisphier that the user is in
            //return <div>Latitude: {this.state.lat}</div>

            //So we are taking a property from the state
            //of the App component and passing it as props down
            //into the SeasonDisplay
            return <SeasonDisply latitude={this.state.lat}/>
        }

        return <Spinner message="Please accept location request" />
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));