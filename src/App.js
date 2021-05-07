import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import Modal from './components/Modal';
import bgImage from './chuttersnap-8nMjIn195p0-unsplash.jpg';
import './App.css';

import {changePageState, requestMovieResults, changeNominated, closeBanner} from './redux/actions';

const mapStateToProps = state => {
  return{
    showLanding: state.updatePageState.showLanding,
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
    onCloseLanding: () => dispatch(changePageState()),
    onRequestMovieResults: (e) => dispatch(requestMovieResults(e, e.target.value)),
    onClickButton: (e) => dispatch(changeNominated(e)),
    onCloseModal: () => dispatch(closeBanner())
  }
}
class App extends Component {

  render(){
    const {onCloseLanding, onRequestMovieResults, onClickButton, onCloseModal} = this.props;
    const {showLanding, searchField, isPending, movieResults, nominatedMovies, nominatedIDs, showBanner} = this.props;
    
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
    if(showLanding){
      return(
        <div className='bg-black'>
          <img src={bgImage} alt='background' className='vh-100 w-100 fade-in'/>
          <h1 className='white pos-one fade-in'>Award Of The Year</h1>
          <div className=' gold pos-two bounce-fade pl1 pr1'>The Shoppies</div>
          <button 
            onClick={onCloseLanding} 
            className='pos-three fade-in-delay ba b--white bg-black white pl3 pr3 pt2 pb2 grow'>
              Vote Now
          </button>
        </div>
      );
    } else {

      return (
        <div className='w-100 vh-100 bg-black flex items-center flex-column'>
          <h1 className='gold avenir fade-in'>The Shoppies</h1>
          <div className='pl3 pr3 pt1 pb3 ml3 mr3 mb3 mt1 w-70 br1 ba b--gold fade-in'>
            <h4 className='gold'>Movie Title</h4>
            <SearchBar 
              keyPress={onRequestMovieResults}
            />
          </div>  
          <div className='ma2 w-70 flex justify-between fade-in'>
            <MovieList 
              title={'Results for ' + searchField} 
              movieList={filteredResults} 
              buttonType={'Nominate'} 
              buttonPress={onClickButton}/>
            <MovieList 
              title={'Nominated Movies'} 
              movieList={nominatedMovies} 
              buttonType={'Remove'} 
              buttonPress={onClickButton}/>
          </div>
          <Modal
            show={showBanner}
            hideModal={onCloseModal}
          />
        </div>
      );
    }
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
