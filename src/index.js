import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from './searchMovies';
import './index.css';

class Main extends React.Component {
  render() {
    return (
      <>
      <div className="container">
        <h1 className="title">Movie Searcher</h1>
        <SearchMovies />
      </div>
      </>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
