import {
    CHANGE_SEARCH_FIELD,
    SEARCH_MOVIE_PENDING,
    SEARCH_MOVIE_SUCCESS,
    SEARCH_MOVIE_FAIL,
    NOMINATE_MOVIE,
    REMOVE_MOVIE
} from './constants'

const API_KEY = process.env.REACT_APP_API_KEY;

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestMovieResults = (e,searchField) => (dispatch) => {
    if(e.keyCode == 13){
        dispatch({type: SEARCH_MOVIE_PENDING});

        fetch('http://www.omdbapi.com/?apikey='+API_KEY+'&s='+searchField)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                dispatch ({type: SEARCH_MOVIE_SUCCESS, payload: data})
            })
            .catch(error => dispatch ({type: SEARCH_MOVIE_FAIL, payload: error}))
    }
}