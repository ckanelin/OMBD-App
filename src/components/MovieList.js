import React from 'react';
import BulletPoint from './BulletPoint';
import './MovieList.css';

const MovieList = ({title, movieList, buttonType, buttonPress}) => {

    const movies = movieList.map(movie => {
   
        return <BulletPoint
                    key={movie.imdbID}
                    movieID={movie.imdbID}
                    movieTitle={movie.Title}
                    movieYear={movie.Year}
                    buttonType={buttonType}
                    buttonPress={buttonPress}
                    isDisabled={movie.isNominated}
                />
    })

    return(
        <div className='MovieList pa3 bg-white br2'>
            <h4>{title}</h4>
            <ul>
                {movies}
            </ul>
        </div>
    );
}

export default MovieList;