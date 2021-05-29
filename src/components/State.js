import React from 'react';



const State = (props) => {
  return (
    <li>


      <h2> state name</h2>
      <h2>{props.sname}</h2>
      <h2>state Id</h2>
      <h3>{props.ied}</h3>
      
    </li>
  );
};

export default State;