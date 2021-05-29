import React from 'react';

import Movie from './Movie';
import State from './State';


const MoviesList = (props) => {
  return (     
    <ul>
      {props.movies.map((movie) => (
        <Movie
          dname={movie.dname}
          id={movie.id}
        />
      ))}

      </ul>
  );
};

export default MoviesList;