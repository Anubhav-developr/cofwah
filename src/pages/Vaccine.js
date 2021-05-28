import React , { useState } from 'react';
import MoviesList from '../components/MoviesList';

function Vaccine(){

   //vaccine by district trial 
   const [movies, setMovies] = useState([]);

 async function fetchMoviesHandler() {
    const response = await fetch('https://cdn-api.co-vin.in/api/v2/admin/location/districts/24');
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
      
  



return( 
       <p> <button onClick={fetchMoviesHandler}>District List with Id</button> <br></br> <br></br>
        <p>  <MoviesList movies={movies} /></p>

        <p> <button onClick={fetchMoviesHandler1}>District List with xy situatoipojn</button> <br></br> <br></br>
        <p>  <MoviesList movies={movies} /></p>
        
        </p> </p>
    
);

}

export default Vaccine;