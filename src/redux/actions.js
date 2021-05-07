import {
    CLOSE_LANDING,
    CHANGE_SEARCH_FIELD,
    SEARCH_MOVIE_PENDING,
    SEARCH_MOVIE_SUCCESS,
    SEARCH_MOVIE_FAIL,
    ADD_NOMINEES,
    REMOVE_NOMINEES,
    CLOSE_BANNER
} from './constants'

export const changePageState = () => ({
    type: CLOSE_LANDING
});

const API_KEY = process.env.REACT_APP_API_KEY;

export const requestMovieResults = (e,searchField) => (dispatch) => {
    if(e.keyCode === 13){
        dispatch({type: CHANGE_SEARCH_FIELD, payload:searchField})
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
    console.log(e.target);
    const buttonType = e.target.attributes.buttontype.value.toLowerCase();
    const movieID = e.target.attributes.movieID.value;
    const movieTitle = e.target.attributes.movietitle.value;
    const movieYear = e.target.attributes.movieyear.value
    const moviePoster = e.target.attributes.movieposter.value
    
    const nominee = {
        imdbID:movieID,
        Title: movieTitle,
        Year: movieYear,
        Poster: moviePoster
    }

    if(buttonType === "nominate"){
        dispatch({type: ADD_NOMINEES, payload: nominee})
    } else if(buttonType === "remove"){
        dispatch({type: REMOVE_NOMINEES, payload: movieID})
    }
}

export const closeBanner = () => ({
    type: CLOSE_BANNER
})

