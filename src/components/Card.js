import React from 'react';
import './Card.css';

const Card = ({movieID, movieTitle, movieYear, url, buttonType, buttonPress, isDisabled}) => {

    const allowClick = isDisabled? "unclickable w-40 tc pa2 ma3 bw1 br4 ba bg-washed-blue shadow-5 dim":
        "clickable w-40 tc pa2 ma3 bw1 br4 ba bg-washed-blue shadow-5 dim";
	return(

        <div 
            id={movieID}
            className= {allowClick}
            onClick={buttonPress}
            buttontype={buttonType}
            movieid={movieID}
            movietitle={movieTitle}
            movieyear={movieYear}
            movieposter={url}
        >
            <img 
                src={url} 
                alt='Loading...' 
                className='unclickable br4 shadow-1'/>
            <h5 className="unclickable georgia bold">{movieTitle + " (" + movieYear +")"}</h5>

        </div>
        
	);
}

export default Card;