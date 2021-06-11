import React , { useState , useEffect , useCallback } from 'react';
import MoviesList from '../components/MoviesList';
import Statelist from '../components/Statelist';
import AppointmentList from '../components/AppointmentList';
import './load.css'

function Vaccine(){

    function reverseString(str) {
        var newString = "";
        for (var i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }
    
    if (document.getElementById("t") != null){
    var ipp = +document.getElementById("t").value;
    var s = ipp.toString();
    }

    // getting the date from input tag//{<input type="date" id="ddl></input>"}
    if(document.getElementById("ddl")!=null){
    var date = new Date(document.getElementById("ddl").value)
    var dd = date.getDate();
    var mm = date.getMonth()+1; //January is 0!
    var yyyy = date.getFullYear();
    if(dd<10){dd='0'+dd};
    if(mm<10){mm='0'+mm};
     var today = dd+'-'+mm+'-'+yyyy;
     
   
      
    
     
       
    }

   

    if (document.getElementById("disID") != null){
        var mk = +document.getElementById("disID").value;
        var l = mk.toString();
        }

   
     
     
 var url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${l}&date=${today}`;
   //vaccine by district trial 
   const [movies, setMovies] = useState([]);
   const [stats,setStatess] = useState([]);
   const [statss,setStatessa] = useState([]);
   const [loadhoega,loadingbaba] = useState(false);
   const [error,kyagadbad] = useState(null);
  

 async function fetchMoviesHandler() {
    const response = await fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${s}`);
    const data = await response.json()
      
        const transformedata = data.districts.map((vaxinedata) => {
          return {
            id: vaxinedata.district_id,
            dname: vaxinedata.district_name,
          };
        });
        setMovies(transformedata);
      }

      async function fetchMoviesHandlers() {
        const response = await fetch('https://cdn-api.co-vin.in/api/v2/admin/location/states');
        const data = await response.json()
          
            const transformedata = data.states.map((vaxinedata) => {
              return {
                ied: vaxinedata.state_id,
                sname: vaxinedata.state_name,
              };
            });
            setStatess(transformedata);
          }

         

      const fetchMoviesHandlersA = useCallback(async()=> {
        loadingbaba(true);
        kyagadbad(null);
        try {
          const response = await fetch(url);
       
          if(!response.ok){
            throw new Error('Something went wrong');
          }
          const data = await response.json()
            const transformedata = data.sessions.map((vaxinedata) => {
              return {
                cid: vaxinedata.center_id,
                cname: vaxinedata.name,
                tfrom: vaxinedata.from,
                to: vaxinedata.to,
                feetype: vaxinedata.fee_type,
                sessionid: vaxinedata.session_id,
                date: vaxinedata.date,
                cap_dose1: vaxinedata.available_capacity_dose1,
                cap_dose2: vaxinedata.available_capacity_dose2,
                avl_cap: vaxinedata.available_capacity,
                fees: vaxinedata.fee,
                Minage: vaxinedata.min_age_limit,
                Vtype: vaxinedata.vaccine


              };
            });
            setStatessa(transformedata);
            
            
          
      
        } catch(error){
              kyagadbad(error.message);
        }
        loadingbaba(false);
        const response = await fetch(url);
        const data = await response.json() 
        if(!data.sessions) {
          data.sessions = [];
        }     
          
            const transformedata = data.sessions.map((vaxinedata) => {
              return {
                cid: vaxinedata.center_id,
                cname: vaxinedata.name,
                tfrom: vaxinedata.from,
                to: vaxinedata.to,
                feetype: vaxinedata.fee_type,
                sessionid: vaxinedata.session_id,
                date: vaxinedata.date,
                cap_dose1: vaxinedata.available_capacity_dose1,
                cap_dose2: vaxinedata.available_capacity_dose2,
                avl_cap: vaxinedata.available_capacity,
                fees: vaxinedata.fee,
                Minage: vaxinedata.min_age_limit,
                Vtype: vaxinedata.vaccine


              };
            });
            setStatessa(transformedata);
            loadingbaba(false);
            
          },[]);
      
          useEffect(()=>{fetchMoviesHandlersA();},[fetchMoviesHandlersA]);



return( <React.Fragment>
        <input type="Number" id="t"></input>
        <button>Submit state id</button>
       <p> <button onClick={fetchMoviesHandler}>District List with Id</button> <br></br> <br></br>
       <button onClick={fetchMoviesHandlers}> state names with id </button>
       <ul><li>see your appointment with date and district id </li></ul>
       <input type="date" id="ddl"></input>
       <input type="number" id="disID"></input>    
         <button onClick={fetchMoviesHandlersA}> see appointment </button>
        <p>  <MoviesList movies={movies} /></p>
        <p><Statelist movies={stats}></Statelist></p>
        <p>{!loadhoega && <AppointmentList  movies={statss}></AppointmentList>}</p>
          
            {loadhoega && statss.length>0 && !error && <p id="loadwala">Loading....</p>}
            {loadhoega && statss.length===0 && !error && <p id="loadwala">Nothing found </p>}
            {!loadhoega && error && <p>{error}</p>}         
        <p><br></br> <br></br>
        
        
        </p> </p>
        </React.Fragment>
    
);

}

export default Vaccine;