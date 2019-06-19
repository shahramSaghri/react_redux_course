import React from 'react';


const Spinner = (props) => {

    return (
    
        <div className="ui active dimmer">
            <div class="ui massive text loader">{props.message}</div>
        </div>
    );
}

//The following object provides us with a default value for
//the message field of the props object which we get from the
//App component.
Spinner.degaultProps = {
    message: 'Loading...'
}

export default Spinner;