import React from 'react';

import Movie from './Movie';
import State from './State';


const StateList = (props) => {
  return (     
    <ul>

{props.movies.map((movie) => (
        <State sname={movie.sname}
        ied={movie.ied}/>
      ))}
    </ul>
   
  );
};

export default StateList;