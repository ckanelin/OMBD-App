import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

import {setSearchField, requestMovieResults, addNominated} from './redux/actions';

const mapStateToProps = state => {
  return{
    searchField: state.updateSearchField.searchField,
    isPending: state.requestMovieResults.isPending,
    movieResults: state.requestMovieResults.movieResults,
    nominatedMovies: state.updateNominated.nominatedMovies,
    nominatedIDs: state.updateNominated.nominatedIDs
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
    onRequestMovieResults: (e) => dispatch(requestMovieResults(e, e.target.value)),
    onClickNominate: (e) => dispatch(addNominated(e))
  }
}
class App extends Component {

  constructor(){
    super();
  }

  render(){
    const {onSearchChange, onRequestMovieResults, onClickNominate} = this.props;
    const {isPending, movieResults, nominatedMovies, nominatedIDs} = this.props;

    let filteredResults = [];
    if(!isPending){
    
      filteredResults = movieResults.map(movie => {
        if(nominatedIDs.includes(movie.imdbID)){
          movie.isNominated = true;
        }else{
          movie.isNominated = false;
        }
        return movie;
      })
    }
  
    return (
        <div className='w-100 vh-100 bg-light-gray flex items-center justify-center flex-column'>
          
          <div className='bg-white pa3 ma2 w-70 br2'>
            <p>Movie Title</p>
            <SearchBar 
              searchChange={onSearchChange} 
              keyPress={onRequestMovieResults}
            />
          </div>
          <div className='ma2 w-70 flex justify-between'>
          <MovieList movieList={filteredResults} buttonType={'Nominate'} buttonPress={onClickNominate}/>
            <MovieList movieList={nominatedMovies} buttonType={'Remove'}/>
          </div>

        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
