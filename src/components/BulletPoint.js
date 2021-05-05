import React from 'react';

const BulletPoint = ({movieID, movieTitle, movieYear, buttonType, buttonPress, isDisabled}) => {

    return(
        <li key={movieID}>
            {movieTitle+ ' ('+ movieYear + ')'}
            <button 
                className="ma2" 
                buttontype={buttonType}
                onClick={buttonPress}
                disabled={isDisabled} 
                movieid={movieID}
                movietitle={movieTitle}
                movieyear={movieYear}>
                    
                {buttonType}</button>
        </li>
    );
}

export default BulletPoint;