import React from 'react';
import './MovieList.css';

const MovieList = ({movieList}) => {
    return(
        <div className='MovieList pa3 bg-white br2'>
            <h4>Title</h4>
            <ul>
                {
                    movieList.map((movie) => {
                        return (
                            <li>{movie}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default MovieList;