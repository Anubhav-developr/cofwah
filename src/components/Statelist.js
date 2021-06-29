import React from 'react';


import State from './State';


const StateList = (props) => {
  return (     
    <div style={{border: "2px solid green",borderRadius: "3px", display: "flex", width: "fit-content"}} >  <span>राज्य सूची संख्या के साथ :</span> 
<select name="list" id="sl">
{props.movies.map((movie) => (
        <State sname={movie.sname}
        ied={movie.ied}/>
      ))}
      </select>
    </div>
   
  );
};

export default StateList;