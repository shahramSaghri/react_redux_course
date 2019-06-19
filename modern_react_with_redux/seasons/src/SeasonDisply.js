import './SeasonDisply.css';
import React from 'react';


//The config object tells us what
//text and what icon name we should use
//if the season is summer or it's winter
const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, it is cold!',
        iconName: 'snowflake'
    }
};


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

    //The following will return a single element of
    //the seasonConfig object based on the specified season
    //in the square braket
    const { text, iconName } = seasonConfig[season]
    return (
        // as best practice it's better to give the 
        //root tag of each jsx same name as the component
        //name like so. 
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>
                {text}
            </h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
    
};

export default SeasonDisply;