import Appointment from './Appointment';



const AppointmentList = (props) => {
  return (     
    <ul>

{props.movies.map((movie) => (
        <Appointment 
        cname={movie.cname}
        tfrom={movie.tfrom}
        to={movie.to}
        feetype={movie.feetype}
        sessionid={movie.sessionid}
        date={movie.date}
        cap_dose1={movie.cap_dose1}
        cap_dose2={movie.cap_dose2}
        avl_cap={movie.avl_cap}
        fees={movie.fees}
        Minage={movie.Minage}
        Vtype={movie.Vtype}
 />
      ))}
    </ul>
   
  );
};

export default AppointmentList;



