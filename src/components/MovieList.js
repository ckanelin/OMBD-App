import React from 'react';
import './MovieList.css';

const MovieList = () => {
    return(
        <div className='MovieList pa3 bg-white br2'>
            <h4>Title</h4>
            <ul>
                <li>Movie 1</li>
                <li>Movie 2</li>
            </ul>
        </div>
    );
}

export default MovieList;