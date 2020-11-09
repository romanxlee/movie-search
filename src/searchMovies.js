import React, {useState} from "react";
import MovieCard from './movieCard.js';

export default function SearchMovies() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=1b1b4510442e5af5126d0032d7bcc8e8&language=ru&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url)
            const data = await res.json();
            setMovies(data.results);
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <>
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Введите название фильма</label>
            <input className="input" type="text" name="query" placeholder=" i.e. Jurassic Park" value={query} onChange={(e) => setQuery(e.target.value)}/>
            <button className="button" type="submit">Поиск</button>
        </form>
        <div className="card-list">
            {movies.filter(movie => movie.poster_path).map(movie => (
                <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>
        </>
    )
}