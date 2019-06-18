import React from 'react';


//The following function determines what is the current
//season of the user based on the month and the latitude
const getSeason = (currentLat, currentMonth) => {
    if (currentMonth > 2 && currentMonth < 9) {
        return currentLat > 0 ? 'summer' : 'winter';
    }else{
        return currentLat > 0 ? 'winter' : 'summer';
    }
} 
 

const SeasonDisply = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth());
    const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
    const icon = season === 'winter' ? 'snowflake' : 'sun';
    return (
        <div>
            <i className={`${icon} icon`} />
            <h1>
                {text}
            </h1>
            <i className={`${icon} icon`} />
        </div>
    );
    
};

export default SeasonDisply;