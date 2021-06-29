import SelectDID from './SelectDID';
import React from 'react';
const DistrictIdWala = (props) => {
    return (
        <div>{props.movies.map((movie) => (
            <SelectDID
              dname={movie.dname}
              id={movie.id}
            />
          ))}</div>
        
  
  
    );
}

export default DistrictIdWala;