import React , { useState , useEffect , useCallback } from 'react';
import MoviesList from '../components/MoviesList';
import Statelist from '../components/Statelist';
import AppointmentList from '../components/AppointmentList';
import './load.css'
import DistrictIdWala from '../components/DistrictIdWala';
import Form from '../components/Form';
import './CSS_ke_log/movieslistakadistrict.css';


function Vaccine(){

   var s,l,today;
   
    if (document.getElementById("t") != null){
    var ipp = +document.getElementById("t").value;
     s = ipp.toString();
    } 

    

    
    // getting the date from input tag//{<input type="date" id="ddl></input>"}
    if(document.getElementById("ddl")!=null){
    var date = new Date(document.getElementById("ddl").value)
    var dd = date.getDate();
    var mm = date.getMonth()+1; //January is 0!
    var yyyy = date.getFullYear();
    if(dd<10){dd='0'+dd};
    if(mm<10){mm='0'+mm};
    today = new Array();
      today[0] = dd+'-'+mm+'-'+yyyy; //today me date le rha hai 
      
    } 
  
  
    if (document.getElementById("disID") != null){
        var mk = +document.getElementById("disID").value;
         l = new Array();
         l[0] = mk.toString();
         
        }
      
     
     
     
 
   //vaccine by district trial 
   const [movies, setMovies] = useState([]);
   const [stats,setStatess] = useState([]);
   const [statss,setStatessa] = useState([]);
   const [loadhoega,loadingbaba] = useState(false);
   const [error,kyagadbad] = useState(null);
   const [datey,setDatey] = useState([]);
   const [shahar,setShahar] = useState([]);
   const [rajya,setRajya] = useState([]);
   var batey = datey.toString();
   var omni = batey.split("-").reverse().join("-");
   const VacyOBJ = { 
    Rajya_Id : rajya , 
    Ur_Date : datey , 
    Tareekh : omni ,
    District_ID : shahar
  };

  var url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${VacyOBJ.District_ID}&date=${VacyOBJ.Tareekh}`;
 
  
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

         console.log(url);
  
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
        var arrify =  data.sessions;
          if(arrify){
            const transformedata =arrify.map((vaxinedata) => {
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
                Vtype: vaxinedata.vaccine,
                latitude: vaxinedata.lat,
                longitude: vaxinedata.long 

              };
            }); 
            setStatessa(transformedata);
            loadingbaba(false);
          }
          },[]);
      
          useEffect(()=>{fetchMoviesHandlersA();},[fetchMoviesHandlersA]);

   // option select karne ke lieye 
  /* var arey;
          var sb = document.getElementById("sl");
          var btn = document.getElementById("btn");
          var appontmt = document.getElementById("tintin");
          if(appontmt){
            appontmt.onclick = (e) => {
              e.preventDefault();
              const selectedValues = [].filter
                  .call(sb.options, option => option.selected)
                  .map(option => option.text);
             var svalue = selectedValues.toString();
            
             let jn = 3;
             var sstri = svalue.substring(svalue.length-jn);
             console.log(sstri);
             arey = new Array(); 
             arey[0] = sstri;

              
          };  
            
          }  */
          
          const INdate = (event) => {
            setDatey(event.target.value);
          }
          const INdistID = (event) => {
            setShahar(event.target.value);
          }
          const StateIDFun = (event) => {
            setRajya(event.target.value);
          }
    const SubmitHandler = (event) => {
      event.preventDefault();
  console.log(VacyOBJ);
  FetchAll();
  
 
  
    };
    //<button className="fifth" id="submitstateid">Submit state id</button></div>
  function FetchAll(){
    fetchMoviesHandler();
    fetchMoviesHandlers();
    fetchMoviesHandlersA();
  }
return( <React.Fragment>
       <div style={{border: "2px solid blueviolet", background_color:"lightgreen",width:"fit-content"}}>
       
      <div className="nzdiki"> <span>नज़दीकी वैक्सीन टीके की जानकारी</span></div>
  
      
           
        <form onSubmit={SubmitHandler}>
         <div className="form_controls dlid"><label>राज्य संख्या डालें</label>
            <input type="Number" id="t" className="padding" value={rajya} onChange={StateIDFun}></input>
            <button onClick={fetchMoviesHandler}  className="fifth" style={{margin:"4px"}}>संख्या के आधार पर जिला सूची</button></div>
            <div className="form_controls flex">
             <label>दिनांक डालें</label>
             <input type="date" id="ddl" value={datey} onChange={INdate} className="padding" ></input>
            </div>
            <div className="form_controls">
           <label>जिला संख्या डालें</label>
           <input id="disID" value={shahar} onChange={INdistID} className="padding"></input>
            </div>
            <div id="vaccine_actions">
              <button type="submit" id="tintin" className="fifth" style={{fontSize:"15px"}}>सबमिट करें</button>
            </div>
        </form>
        </div>
        <br></br>
        
        <MoviesList movies={movies} />
       
        <Statelist movies={stats}></Statelist>

        <div  ><button onClick={fetchMoviesHandlers} id="statenaamid" className="fifth" style={{fontSize:"17x"}}>राज्य संख्या सूची देखें</button></div>
        {!loadhoega && <AppointmentList  movies={statss}></AppointmentList>}
          
            {loadhoega && statss.length>0 && !error && <p id="loadwala">Loading....</p>}
            {loadhoega && statss.length===0 && !error && <p id="loadwala">Nothing found </p>}
            {!loadhoega && error && <p>{error}</p>}         
        

        
        
        </React.Fragment>
           
    
);

}

export default Vaccine;