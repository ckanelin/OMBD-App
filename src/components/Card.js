import React from 'react';
import './Card.css';

const Card = ({movieID, movieTitle, movieYear, url, buttonType, buttonPress, isDisabled}) => {

    const allowClick = isDisabled? "unclickable-card w-40 tc pa2 ma3 br2 bg-black dim":
        "clickable-card w-40 tc pa2 ma3 br2 bg-black dim";
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
                className='unclickable'/>
            <div className="unclickable white avenir fw6 pa2 mt3 mb1">{movieTitle}</div>
            <div className="unclickable white avenir mb2">{" (" + movieYear +")"}</div>

        </div>
        
	);
}

export default Card;