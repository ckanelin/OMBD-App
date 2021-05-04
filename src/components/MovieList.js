import React from 'react';
import BulletPoint from './BulletPoint';
import './MovieList.css';

const MovieList = ({movieResults, buttonType}) => {

    const movies = movieResults.map(movie => {
        return <BulletPoint
                    key={movie.imdbID}
                    movieName={movie.Title}
                    buttonType={buttonType}
                />
    })

    return(
        <div className='MovieList pa3 bg-white br2'>
            <h4>Title</h4>
            <ul>
                {movies}
            </ul>
        </div>
    );
}

export default MovieList;