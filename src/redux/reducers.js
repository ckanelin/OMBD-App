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
    movieResults: [{
        "Title": "Hello, My Name Is Doris",
        "Year": "2015",
        "imdbID": "tt3766394",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTg0NTM3MTI1MF5BMl5BanBnXkFtZTgwMTAzNTAzNzE@._V1_SX300.jpg"
    },
    {
        "Title": "Hello, Dolly!",
        "Year": "1969",
        "imdbID": "tt0064418",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODJmZmFiNzQtMDJiYS00ZTgzLTljZGMtNjEzNzM4NmEyYjNiXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg"
    },
    {
        "Title": "Hello Ladies",
        "Year": "2013–2014",
        "imdbID": "tt2378794",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjYxMjI3MzY3NF5BMl5BanBnXkFtZTgwMTgyNzg3MDE@._V1_SX300.jpg"
    },
    {
        "Title": "Hello Mini",
        "Year": "2019–",
        "imdbID": "tt9454892",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTFiOTkyNjktZGM1Zi00MDhhLThhYjAtODUwNDVhYzJjOTEwXkEyXkFqcGdeQXVyMTE0Nzg1NjQ2._V1_SX300.jpg"
    },
    {
        "Title": "Hello I Must Be Going",
        "Year": "2012",
        "imdbID": "tt2063666",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzkzMDc0Nzg5OF5BMl5BanBnXkFtZTcwMDU0MzAyOA@@._V1_SX300.jpg"
    },
    {
        "Title": "Hello Ladies: The Movie",
        "Year": "2014",
        "imdbID": "tt3762944",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ5MjYxMjkwOV5BMl5BanBnXkFtZTgwODE3MjY0MzE@._V1_SX300.jpg"
    },
    {
        "Title": "Hello Ghost",
        "Year": "2010",
        "imdbID": "tt1848926",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjZlYTBlZWMtNjc4Ni00ZmEyLTk1ZmQtZGI3ZDg4ZmM2OGU3XkEyXkFqcGdeQXVyNjI4NDY5ODM@._V1_SX300.jpg"
    },
    {
        "Title": "Hello Brother",
        "Year": "1999",
        "imdbID": "tt0233856",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjk1MDczMGQtY2RkNS00OGVhLWJhNzYtNWMwMzFhNTcyNjczXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
    },
    {
        "Title": "Hello Again",
        "Year": "1987",
        "imdbID": "tt0093175",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDljODVmZGYtZWZkNS00NmFmLTk1OGMtNGU4YmFjNDYxZDk2XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg"
    },
    {
        "Title": "Hello Charlie",
        "Year": "2021",
        "imdbID": "tt14260080",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNmNjODA5MjgtZDkyMy00ZmExLTk5N2QtYzIzMzNlNGIyZjZiXkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_SX300.jpg"
    }],
    isPending: false,
    error: ''
}

export const requestMovieResults = (state = initialStateMovieResults, action = {}) => {
    switch(action.type){

        case SEARCH_MOVIE_PENDING:
            return Object.assign({}, state, {isPending: true});
        
        case SEARCH_MOVIE_SUCCESS:
                return Object.assign({}, state, {movieResults: action.payload.Search, isPending: false});

        case SEARCH_MOVIE_FAIL:
            return Object.assign({}, state, {error: action.payload, isPending: false});
    
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
