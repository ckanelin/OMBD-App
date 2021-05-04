import {
    CHANGE_SEARCH_FIELD,
    SEARCH_MOVIE_PENDING,
    SEARCH_MOVIE_SUCCESS,
    SEARCH_MOVIE_FAIL,
    NOMINATE_MOVIE,
    REMOVE_MOVIE
} from './constants'

const initialSearchState = {
    searchField:''
}

export const updateSearchField = (state = initialSearchState, action = {}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
         
        default:
            return state;
    }
}

const initialStateMovieResults= {
    movieResults: [],
    isPending: false,
    error: ''
}

export const requestMovieResults = (state = initialStateMovieResults, action = {}) => {
    switch(action.type){

        case SEARCH_MOVIE_PENDING:
            return Object.assign({}, state, {isPending: true})
        
        case SEARCH_MOVIE_SUCCESS:
                return Object.assign({}, state, {movieResults: action.payload.Search, isPending: false})

        case SEARCH_MOVIE_FAIL:
            return Object.assign({}, state, {error: action.payload, isPending: false})
    
        default:
            return state;
    }
}