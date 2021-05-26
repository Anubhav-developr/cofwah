import { Route, Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Two from './components/Two'
import One from './components/One'
import RumorList from './RumorList'


function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
        <a href="index.html"> <img src="logo1 (1).png" alt="k" width="200" height="100" id="i"></img></a>
      <br />
      <h2 class="p">आपको कोविड अफवाहों से बचाना है</h2>
      <RumorList></RumorList>
      <Route path="/One"><One></One></Route>
      <Route path="/Two"><Two></Two></Route>
        <br></br>
        यदि आपके पड़ोस या समाज में कोई अफवाह और मिथक है तो उस भ्रामक अफवाह को प्रस्तुत करें <a href="https://docs.google.com/forms/d/1jAmCNQB2yWYZDjOQFedUWDxqCKuuW4solNrU8vwzU_c/edit#">यहां(here)</a>
        <br></br>
        हमें फोलो करें  :
        <br></br><div id="folow"><a href=""><img src="" alt="instagram" width="70" height="70"></img></a>
        </div>
        अगर आप समुदाय का हिस्सा बनना चाहते हैं तो हमारे व्हाट्सएप ग्रुप से जुड़ें <a href="https://chat.whatsapp.com/KYd7DT162NuKcHpZQn2pA2">here</a>
      
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
      
    
    </div>
  );
  }

export default App;
