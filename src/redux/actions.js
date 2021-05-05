import {
    CHANGE_SEARCH_FIELD,
    SEARCH_MOVIE_PENDING,
    SEARCH_MOVIE_SUCCESS,
    SEARCH_MOVIE_FAIL,
    ADD_NOMINEES,
    REMOVE_NOMINEES
} from './constants'

const API_KEY = process.env.REACT_APP_API_KEY;

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestMovieResults = (e,searchField) => (dispatch) => {
    if(e.keyCode === 13){
        dispatch({type: SEARCH_MOVIE_PENDING});

        fetch('http://www.omdbapi.com/?apikey='+API_KEY+'&s='+searchField)
            .then(response => response.json())
            .then(data => {
                dispatch ({type: SEARCH_MOVIE_SUCCESS, payload: data})
            })
            .catch(error => dispatch ({type: SEARCH_MOVIE_FAIL, payload: error}))
    }
}

export const changeNominated = (e) => (dispatch) => {
    const buttonType = e.target.attributes.buttontype.value.toLowerCase();
    const movieID = e.target.attributes.movieID.value;
    const movieTitle = e.target.attributes.movietitle.value;
    const movieYear = e.target.attributes.movieyear.value
    
    const nominee = {
        imdbID:movieID,
        Title: movieTitle,
        Year: movieYear
    }

    if(buttonType === "nominate"){
        dispatch({type: ADD_NOMINEES, payload: nominee})
    } else {
        dispatch({type: REMOVE_NOMINEES, payload: movieID})
    }
}