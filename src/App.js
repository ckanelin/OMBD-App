import React, {Component} from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'

var listOne = ["Avatar", "The Avengers"];
var listTwo = ["Avatar"];
class App extends Component {

  render(){
    return (
        <div className='w-100 vh-100 bg-light-gray flex items-center justify-center flex-column'>
        
          <div className='bg-white pa3 ma2 w-70 br2'>
            <p>Movie Title</p>
            <SearchBar/>
          </div>

          <div className='ma2 w-70 flex justify-between'>
            <MovieList movieList={listOne}/>
            <MovieList movieList={listTwo}/>
          </div>

        </div>
    );
  }
}

export default App;
