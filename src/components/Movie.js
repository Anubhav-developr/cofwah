import React from 'react';
import '../pages/CSS_ke_log/movieslistakadistrict.css';


const Movie = (props) => {
  return (
    
    <option className="option_control">{props.dname}-{props.id}</option>
  );
};

export default Movie;