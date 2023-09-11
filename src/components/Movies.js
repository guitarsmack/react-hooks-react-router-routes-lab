import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {movies.map(movie => {
      return (
        <div key={movie.title}>
          <h3>Title: {movie.title}</h3>
          <h4>Time: {movie.time}</h4>
          <ul>Genres: 
            {movie.genres.map(genre =>{
            return <li key={genre}>{genre}</li>
          })}</ul>
        </div>
      )
    })}
  </div>;
}

export default Movies;
