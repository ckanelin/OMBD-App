import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import Modal from './components/Modal';

import { requestMovieResults, changeNominated, closeBanner} from './redux/actions';

const mapStateToProps = state => {
  return{
    searchField: state.updateSearchField.searchField,
    isPending: state.requestMovieResults.isPending,
    movieResults: state.requestMovieResults.movieResults,
    nominatedMovies: state.updateNominated.nominatedMovies,
    nominatedIDs: state.updateNominated.nominatedIDs,
    showBanner: state.updateNominated.showBanner
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onRequestMovieResults: (e) => dispatch(requestMovieResults(e, e.target.value)),
    onClickButton: (e) => dispatch(changeNominated(e)),
    onCloseModal: () => dispatch(closeBanner())
  }
}
class App extends Component {

  render(){
    const {onRequestMovieResults, onClickButton, onCloseModal} = this.props;
    const {searchField, isPending, movieResults, nominatedMovies, nominatedIDs, showBanner} = this.props;
    

    let filteredResults = [];
    if(!isPending){
    
      filteredResults = movieResults.map(movie => {
        if(nominatedIDs.includes(movie.imdbID) || nominatedIDs.length >= 5){
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
            <h4>Movie Title</h4>
            <SearchBar 
              keyPress={onRequestMovieResults}
            />
          </div>
          <div className='ma2 w-70 flex justify-between'>
            <MovieList title={'Results for ' + searchField} movieList={filteredResults} buttonType={'Nominate'} buttonPress={onClickButton}/>
            <MovieList title={'Nominated Movies'} movieList={nominatedMovies} buttonType={'Remove'} buttonPress={onClickButton}/>
          </div>
          <Modal
            show={showBanner}
            hideModal={onCloseModal}
          />
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
