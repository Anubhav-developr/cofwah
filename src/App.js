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
     <ul><li className="cssbaba"><Link to='/five' id="li">पल्स ऑक्सीमीटर और पेंसिल( Pulse Oxymeter And Pencil )</Link></li>
      <Route path="/five"><Five></Five></Route>
      <li className="cssbaba"><Link to='/blackfngus' id="li">ब्लैक फंगस से सम्बंधित मिथक(Myths regarding black fungus)</Link></li>
      <Route path="/blackfngus"><Six></Six></Route>
      <li className="cssbaba"><Link to='/One' id="li">हैंड सैनिटाइज़र का उपयोग (Using Hand Sanitizer)</Link></li>
      <Route path="/One"><One></One></Route>
        <li className="cssbaba"><Link to='/Two' id="li">रक्त प्रकार और कोरोनावायरस (Blood type and Coronavirus)</Link></li>
        <Route path="/Two"><Two></Two></Route>
        <li className="cssbaba"><Link to='/Three' id="li">एंटीबायोटिक्स और कोरोना (Antibiotics and corona)</Link></li>
        <Route path="/Three"><Three></Three></Route>
        <li className="cssbaba"><Link to='/four' id="li">5जी रेडियेशन और कोरोनावायरस (5g Radiation and Coronavirus Linkage)</Link></li>
          <Route path="/four"><Four></Four></Route>
          <li><Link></Link></li>
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
     <Route path="./vac"><Vaccine></Vaccine></Route>
        <br></br>
      <Link to="/apnalogin" id="yuk" className="jaha">VOLUNTEER SIGN IN</Link>
       
        </p>
      
        
          
        
      </header>
      
    
    </div>
  );
}
  

export default App;
