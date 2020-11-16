import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from './searchMovies';
import './index.css';

class Main extends React.Component {
  render() {
    return (
      <>
      <div className="container">
        <h1 className="title">
        <img className="logo" src="./watching-tv.svg" alt="Icons made by http://www.freepik.com" />
          ФильмоПоиск</h1>
        <SearchMovies />
      </div>
      </>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
