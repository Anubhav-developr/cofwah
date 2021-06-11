import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import { Route, Router, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Two from './pages/Two'
import One from './pages/One'
import RumorList from './components/RumorList'
import Three from './pages/Three';
import Four from './pages/Four';
import Five from './pages/Five';
import Six from './pages/Six';
import logoimg from './logo1 (1).png';
import Vaccine from './pages/Vaccine';
import APNA_LOGIN from './APNA_LOGIN';
import insta from './pages/insta.jpg';
import what from './pages/what.png';
import Handryer from './pages/Handryer';




function App() {

  


  var k = fuv();
  function fuv() {
     k = 5;
  }
  
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
        <a href="index.html"> <img src={logoimg} alt="k" width="200" height="100" id="i"></img></a>
      <br />
      <h2 class="p">आपको कोविड अफवाहों से बचाना है</h2>
     <div>
     <ul><Link to='/five' id="li"><li className="cssbaba">पल्स ऑक्सीमीटर और पेंसिल( Pulse Oxymeter And Pencil )</li></Link>
      <Route path="/five"><Five></Five></Route>
      <Link to='/blackfngus' id="li"> <li className="cssbaba">ब्लैक फंगस से सम्बंधित मिथक(Myths regarding black fungus)</li></Link>
      <Route path="/blackfngus"><Six></Six></Route>
      <Link to='/One' id="li"> <li className="cssbaba">हैंड सैनिटाइज़र का उपयोग (Using Hand Sanitizer)</li></Link>
      <Route path="/One"><One></One></Route>
    
      <Link to='/Two' id="li"> <li className="cssbaba">रक्त प्रकार और कोरोनावायरस (Blood type and Coronavirus)</li></Link>
        <Route path="/Two"><Two></Two></Route>
        <Link to='/Three' id="li"><li className="cssbaba">एंटीबायोटिक्स और कोरोना (Antibiotics and corona)</li></Link>
        <Route path="/Three"><Three></Three></Route>
        <Link to='/four' id="li"><li className="cssbaba">5जी रेडियेशन और कोरोनावायरस (5g Radiation and Coronavirus Linkage)</li></Link>
          <Route path="/four"><Four></Four></Route>
          <li><Link to='/fivve' style={{textDecoration: "None"}}>हैंड ड्रायर </Link></li>
         <Route path="/fivve"><Handryer></Handryer></Route>
         
       
     
         
         </ul>
         
     </div>
     
     <Route path="/apnalogin"><APNA_LOGIN></APNA_LOGIN></Route>
        <br></br>
        <div className="jaha">यदि आपके पड़ोस या समाज में कोई अफवाह और मिथक है तो उस भ्रामक अफवाह को प्रस्तुत करें <a href="https://docs.google.com/forms/d/1jAmCNQB2yWYZDjOQFedUWDxqCKuuW4solNrU8vwzU_c/edit#">यहां(here)</a></div>
        <br></br>
       <div className="jaha"> हमें फोलो करें  :</div>
        <div id="folow"><a href="https://instagram.com/cofwah/"><img src={insta} alt="instagram" width="60" height="60"></img></a>
        </div>
        <div className="jaha">अगर आप समुदाय का हिस्सा बनना चाहते हैं तो हमारे व्हाट्सएप ग्रुप से जुड़ें  <br></br><a href="https://chat.whatsapp.com/KYd7DT162NuKcHpZQn2pA2"><img src={what} height="50" width="50"></img></a></div>
        <p><Link to="./vac" className="jaha" id="jkl">Vaccine Availibility</Link></p>
     <Vaccine></Vaccine>
        <br></br>
      <Link to="/apnalogin" id="yuk" className="jaha">MEMBER SIGN IN</Link>
       
        </p>
      
        
          
        
      </header>
      
    
    </div>
  );
}
  

export default App;
