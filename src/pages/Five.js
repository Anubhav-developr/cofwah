import image from './img.png';
import btn from './btn.png';
import React, { useState } from 'react';
import './CSS_ke_log/Pencilwala.css';
import Sound from 'react-sound';
import PENCIL from './pencil.mp3'
import './CSS_ke_log/CssForFIVEJS.css'
function Five() {

    const [isPlaying,setIsPlaying]= useState(false);






 return(
    <div id="pncilwala">
       
        <p>अगर पेंसिल लगाने पर रीडिंग आ रही है तो ऑक्सीमीटर को ख़राब  <span> न</span>  माने और <span>ना</span>  ही पेंसिल या कोई और वस्तु ऑक्सीमीटर
 में लगाएं इससे ऑक्सीमीटर का सेंसर ख़राब हो सकता है </p>
        <p>व्याख्या</p>
        <img src={image} alt="oximeter"></img>
        <p> पल्स ऑक्सीमीटर या अन्य मशीनों में जांच के सेंसर पर पड़ने वाले लाल और अवरक्त प्रकाश की मात्रा की संवेदनशीलता के आधार पर रोगी की स्थिति का पता लगाया जाता है। जब एलईडी और डिटेक्टर के बीच की दूरी बढ़ाकर या जांच के अंदर कोई वस्तु डालने से यह बाधित होता है, तो मॉड्यूल सोचेगा कि उंगली डाली गई है और एक पल्स की खोज शुरू कर देगा। इस स्थिति में, डिटेक्टर पर पड़ने वाले विसरित प्रकाश की बदलती तीव्रता एक स्पंदनात्मक प्रभाव पैदा कर सकती है और पल्स ऑक्सीमीटर पर रीडिंग ले सकती है। पल्स ऑक्सीमीटर एक बहुत ही संवेदनशील उपकरण है। हालांकि, अगर एलईडी और सेंसर के बीच का अंतर पूरी तरह से बंद है, ताकि डिटेक्टर पर कोई प्रकाश न पड़े, तो पल्स ऑक्सीमीटर को कोई पल्स नहीं लगेगा और कोई रीडिंग नहीं होगी। </p>
    <button onClick={() => setIsPlaying(!isPlaying)}><img src={btn} width="30" height="30" id="bty" alt="audiobtn"></img></button>
    
    <Sound 
    url={PENCIL}
    playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
    
    onFinishedPlaying={Sound.status.STOPPED}
    
    
    />
    </div>

 );
}

export default Five;