import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import { Route, Router } from 'react-router-dom';
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
     <ul><li className="cssbaba"><Link to='/five'>पल्स ऑक्सीमीटर और पेंसिल( Pulse Oxymeter And Pencil )</Link></li>
      <Route path="/five"><Five></Five></Route>
      <li className="cssbaba"><Link to='/blackfngus'>ब्लैक फंगस से सम्बंधित मिथक(Myths regarding black fungus)</Link></li>
      <Route path="/blackfngus"><Six></Six></Route>
      <li className="cssbaba"><Link to='/One'>हैंड सैनिटाइज़र का उपयोग (Using Hand Sanitizer)</Link></li>
      <Route path="/One"><One></One></Route>
        <li className="cssbaba"><Link to='/Two'>रक्त प्रकार और कोरोनावायरस (Blood type and Coronavirus)</Link></li>
        <Route path="/Two"><Two></Two></Route>
        <li className="cssbaba"><Link to='/Three'>एंटीबायोटिक्स और कोरोना (Antibiotics and corona)</Link></li>
        <Route path="/Three"><Three></Three></Route>
        <li className="cssbaba"><Link to='/four'>5जी रेडियेशन और कोरोनावायरस (5g Radiation and Coronavirus Linkage)</Link></li>
          <Route path="/four"><Four></Four></Route>
          <li><Link></Link></li>
         </ul>
     </div>
     
     
        <br></br>
        यदि आपके पड़ोस या समाज में कोई अफवाह और मिथक है तो उस भ्रामक अफवाह को प्रस्तुत करें <a href="https://docs.google.com/forms/d/1jAmCNQB2yWYZDjOQFedUWDxqCKuuW4solNrU8vwzU_c/edit#">यहां(here)</a>
        <br></br>
        हमें फोलो करें  :
        <br></br><div id="folow"><a href="https://instagram.com/cofwah/"><img src="" alt="instagram" width="70" height="70"></img></a>
        </div>
        अगर आप समुदाय का हिस्सा बनना चाहते हैं तो हमारे व्हाट्सएप ग्रुप से जुड़ें <a href="https://chat.whatsapp.com/KYd7DT162NuKcHpZQn2pA2">here</a>

        <p>Vaccine Availibility</p>
        
      <Vaccine></Vaccine> 
       
        </p>
      
        
          
        
      </header>
      
    
    </div>
  );
}
  

export default App;
