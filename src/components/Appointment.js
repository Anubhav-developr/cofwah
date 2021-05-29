import React from 'react';
import './APPISH.css'


const Appointment = (props) => {
  return (     
  <div id="dd">
        <ul>
<li> center name  :   {props.cname}</li>
<li> Opening from   :   {props.tfrom}</li>
<li> Opening To :   {props.to}</li>
<li> Fee type   :   {props.feetype}</li>
<li> Session Id   :   {props.sessionid}</li>
<li> DATE  :   {props.date}</li>
<li> Available capacity for dose 1   :   {props.cap_dose1}</li>
<li> Available capacity for dose 2  :   {props.cap_dose2}</li>
<li> Available Capacity  :   {props.avl_cap}</li>
<li> Fees you have to pay  :   {props.fees}</li>
<li> Minimum Age to Vaccinating :   {props.Minage}</li>
<li> Vaccine Type :   {props.Vtype}</li> 
    </ul>
  </div>
   
  );
};

export default Appointment;


