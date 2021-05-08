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

const initialPageState ={
    showLanding: true
}

export const updatePageState = (state = initialPageState, action = {}) => {
    switch(action.type){
        case CLOSE_LANDING:
            return Object.assign({}, state, {showLanding: false});
         
        default:
            return state;
    }
}

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
            return Object.assign({}, state, {isPending: true});
        
        case SEARCH_MOVIE_SUCCESS:
                return Object.assign({}, state, {movieResults: action.payload.Search, isPending: false, error:""});

        case SEARCH_MOVIE_FAIL:
            return Object.assign({}, state, {movieResults:[], isPending: false, error: action.payload.Error});
    
        default:
            return state;
    }
}

const initialStateNominated = {
    nominatedMovies: [],
    nominatedIDs: [],
    showBanner: false
}

export const updateNominated = (state = initialStateNominated, action = {}) => {
    switch(action.type){
        case ADD_NOMINEES:
            return Object.assign({}, state, 
                {nominatedMovies: state.nominatedMovies.concat(action.payload),
                    nominatedIDs: state.nominatedIDs.concat(action.payload.imdbID),
                    showBanner: state.nominatedIDs.length >= 4
                });

        case REMOVE_NOMINEES:
            return Object.assign({}, state, 
                {nominatedMovies: state.nominatedMovies.filter(movie => {return movie.imdbID !== action.payload}),
                    nominatedIDs: state.nominatedIDs.filter(id => {return id !== action.payload}),
                    showBanner: false
                });

        case CLOSE_BANNER:
            return Object.assign({}, state, {showBanner: false});

        default:
            return state;
    }
}
