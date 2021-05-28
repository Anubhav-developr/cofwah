import React , { useState } from 'react';
import MoviesList from '../components/MoviesList';

function Vaccine(){
    ipp=0;
    var ipp = +document.getElementById("t").value;
    var s = ipp.toString();

   //vaccine by district trial 
   const [movies, setMovies] = useState([]);

 async function fetchMoviesHandler() {
    const response = await fetch('https://cdn-api.co-vin.in/api/v2/admin/location/districts/'+s);
    const data = await response.json()
      
        const transformedata = data.districts.map((vaxinedata) => {
          return {
            id: vaxinedata.district_id,
            dname: vaxinedata.district_name,
          };
        });
        setMovies(transformedata);
      }

      async function fetchMoviesHandler1() {
        const response = await fetch('');
        const data = await response.json()
          
            const transformedata = data.districts.map((vaxinedata) => {
              return {
                id: vaxinedata.district_id,
                dname: vaxinedata.district_name,
              };
            });
            setMovies(transformedata);
          }
      
  



return( <React.Fragment>
        <input type="Number" id="t"></input>
        <button>Submit state id</button>
       <p> <button onClick={fetchMoviesHandler}>District List with Id</button> <br></br> <br></br>
        <p>  <MoviesList movies={movies} /></p>

        <p> <button onClick={fetchMoviesHandler1}>District List with xy situatoipojn</button> <br></br> <br></br>
        <p>  <MoviesList movies={movies} /></p>
        
        </p> </p>
        </React.Fragment>
    
);

}

export default Vaccine;