import React from 'react';

const BulletPoint = ({id, movieName, buttonType}) => {
    return(
        <li key={id}>
            {movieName}
            <button className="ma2">{buttonType}</button>
        </li>
    );
}

export default BulletPoint;