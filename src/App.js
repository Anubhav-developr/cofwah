import React from 'react';
import { Link , useHistory } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Two from './pages/Two'
import One from './pages/One'
import Three from './pages/Three';
import Four from './pages/Four';
import Five from './pages/Five';
import Six from './pages/Six';
import logoimg from './logo1 (1).png';
import Vaccine from './pages/Vaccine';
import APNA_LOGIN from './APNA_LOGIN';
import insta from './images.png';
import what from './pages/what.png';
import Handryer from './pages/Handryer';
import Magnet from './pages/Magnet';




function App() {

  
const History = useHistory();

const handleRoute = () =>{ 
  History.push("/apnalogin");
}

  
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
        <a href="index.html"> <img src={logoimg} alt="logo" width="200" height="100" id="i"></img></a>
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
          <Link to='/fivve' style={{textDecoration: "None"}}><li>हैंड ड्रायर </li></Link>
         <Route path="/fivve"><Handryer></Handryer></Route>
         <Link to="/magnet" style={{textDecoration: "None"}}><li>वैक्सीन और चुम्बक (Magnet and Vaccine)</li></Link>
         <Route path="/magnet"><Magnet></Magnet></Route>
       
     
         
         </ul>
         
     </div>
     
    
        <br></br>
        <div className="jaha">यदि आपके पड़ोस या समाज में कोई अफवाह और मिथक है तो उस भ्रामक अफवाह को प्रस्तुत करें <a href="https://docs.google.com/forms/d/1jAmCNQB2yWYZDjOQFedUWDxqCKuuW4solNrU8vwzU_c/edit#">यहां(here)</a></div>
        <br></br>
       <div className="jaha"> हमें फोलो करें  :</div>
        <div id="folow"><a href="https://instagram.com/cofwah/"><img src={insta} alt="instagram-logo" width="60" height="60"></img></a>
        </div>
        <div className="jaha">अगर आप समुदाय का हिस्सा बनना चाहते हैं तो हमारे व्हाट्सएप ग्रुप से जुड़ें  <br></br><a href="https://chat.whatsapp.com/KYd7DT162NuKcHpZQn2pA2" rel="nofollow"><img src={what} height="50" width="50" alt="WA group"></img></a></div>
       <div id="undev">
        
        <div id="vaccinesys"><Route path="./vacx" exact><Vaccine /></Route></div>
       
      <Vaccine></Vaccine>
       </div>
        <br></br>
       <div id="loginboundary"> <Route path="/apnalogin"><APNA_LOGIN></APNA_LOGIN></Route></div> <br></br>
      <Link to="/apnalogin" id="yuk" className="jaha" onClick={handleRoute}>मेंबर लॉगिन</Link>
     
        </p>
      
        
          
        
      </header>
      
    
    </div>
  );
}
  

export default App;
