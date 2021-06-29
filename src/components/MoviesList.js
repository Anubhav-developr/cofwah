import React from 'react';

import Movie from './Movie';
import '../pages/CSS_ke_log/movieslistakadistrict.css';
import { getQueriesForElement } from '@testing-library/react';





const MoviesList = (props) => {
  return (     
    <div style={{border: "2px solid green",borderRadius: "3px", display: "flex", width: "fit-content"}}>  <span>  जिला सूची संख्या के साथ : </span>                                  
      <select name="list" id="sl" className="flex">
      {props.movies.map((movie) => (
        <Movie
          dname={movie.dname}
          id={movie.id}
        />
      ))}

</select>

    </div>
  );
};

export default MoviesList;