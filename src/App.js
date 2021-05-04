import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import './movies';

import {setSearchField, requestMovieResults} from './redux/actions';

const mapStateToProps = state => {
  return{
    searchField: state.updateSearchField.searchField,
    movieResults: state.requestMovieResults.movieResults
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
    onRequestMovieResults: (e) => dispatch(requestMovieResults(e, e.target.value))
  }
}
class App extends Component {

  constructor(){
    super();
  }

  render(){
    const {onSearchChange, onRequestMovieResults} = this.props;
    const {movieResults} = this.props;

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
            <MovieList movieResults={movieResults} buttonType={'Nominate'}/>
            {/* <MovieList movieList={movieResults} buttonType={'Remove'}/> */}
          </div>

        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
