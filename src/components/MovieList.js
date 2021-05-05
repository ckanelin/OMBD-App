import React from 'react';
import Card from "./Card";
import Scroll from "./Scroll";
import './MovieList.css';

const MovieList = ({title, movieList, buttonType, buttonPress}) => {

    const movies = movieList.map(movie => {
   
        return <Card
                    key={movie.imdbID}
                    movieID={movie.imdbID}
                    movieTitle={movie.Title}
                    movieYear={movie.Year}
                    url={movie.Poster}
                    buttonType={buttonType}
                    buttonPress={buttonPress}
                    isDisabled={movie.isNominated}
                />
    })

    return(
        <div className='MovieList pa3 bg-white br2'>
            <h4>{title}</h4>
            <Scroll>
                <div className = 'flex flex-wrap justify-center'> 
                    {movies}
                </div>
            </Scroll>
        </div>
    );
}

export default MovieList;