import React from 'react';



const Movie = (props) => {
  return (
    <li><h2> District name</h2>
      <h2>{props.dname}</h2>
      <h2>District Id</h2>
      <h3>{props.id}</h3>
      
    </li>
  );
};

export default Movie;