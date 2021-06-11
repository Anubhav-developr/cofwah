import { Link, Switch } from 'react-router-dom';
import { Route , BrowserRouter } from 'react-router-dom';
import './CSS_ke_log/vaxinn.css';
import Dastane from './Dastane';
import AlcoholTouch from './AlcoholTouch';
import SanitiMatra from './SanitiMatra';

const One = () => {
    return (   
        <div className="csskabaap">
            <p id="jij">Truths</p>
         <ul>
        <Switch> <BrowserRouter>
        <li><Link to='/One/hs' className="haua">हैंड सैनिटाइज़र अक्सर इस्तेमाल किया जा सकता है</Link></li> 
        <Route path="/One/hs" exact>
           अल्कोहल-आधारित सैनिटाइज़र एंटीबायोटिक प्रतिरोध नहीं बनाता है। अन्य एंटीसेप्टिक्स और एंटीबायोटिक दवाओं के विपरीत, रोगजनक (हानिकारक रोगाणु) अल्कोहल-आधारित सैनिटाइज़र के लिए प्रतिरोध विकसित नहीं करते हैं।
        
    </Route>
    <li><Link to="/One/hd" className="haua">अल्कोहल-आधारित सैनिटाइज़र सभी के उपयोग के लिए सुरक्षित हैं</Link></li>
             <Route path="/One/hd" exact>सैनिटाइज़र में अल्कोहल कोई प्रासंगिक स्वास्थ्य समस्या पैदा करने के लिए नहीं दिखाया गया है। थोड़ा अल्कोहल त्वचा में अवशोषित हो जाता है, और अधिकांश उत्पादों में त्वचा का सूखापन कम करने के लिए एक कम करनेवाला होता है। एलर्जिक कॉन्टैक्ट डर्मेटाइटिस और अल्कोहल के कारण हाथों के बालों का सफेद होना बहुत ही दुर्लभ प्रतिकूल प्रभाव हैं। दुर्लभ मामलों में आकस्मिक निगलने और नशा का वर्णन किया गया है।</Route>
       <li> <Link to="/One/ht" className="haua">  जिन धर्मों में शराब प्रतिबंधित है, वहां अल्कोहल आधारित सैनिटाइज़र का उपयोग किया जा सकता है </Link></li>
             <Route path="/One/ht" exact>बीमारी को कम करने या बेहतर स्वास्थ्य में योगदान करने के लिए विकसित किसी भी निर्मित पदार्थ को कुरान द्वारा अनुमति दी गई है, जिसमें एक चिकित्सा एजेंट के रूप में उपयोग की जाने वाली शराब भी शामिल है (بیماری کے خاتمے یا بہتر صحت میں شراکت کے ل developed تیار کیا جانے والا کوئی بھی مادہ قرآن مجید کے ذریعہ اجازت دیتا ہے ، اس میں میڈیکل ایجنٹ کے طور پر الکحل بھی شامل ہے۔)</Route>
            <li> <Link to="One/hpm" className="haua">अपने हाथों को बार-बार साफ करना और दस्ताने नहीं पहनना सुरक्षित है</Link></li>
             <Route path="/One/hpm" ><Dastane></Dastane></Route>
         <li><Link to="One/hkl" className="haua">अल्कोहल-आधारित सैनिटाइज़र की सांप्रदायिक बोतल को छूने से आप संक्रमित नहीं होंगे</Link></li>
             <Route path="/One/hkl" ><AlcoholTouch></AlcoholTouch></Route>

    <li><Link to="One/htm" className="haua">आपके द्वारा उपयोग किए जाने वाले अल्कोहल-आधारित सैनिटाइज़र की मात्रा मायने रखती है</Link></li>
             <Route path="/One/htm" ><SanitiMatra></SanitiMatra></Route>
            
            
             </BrowserRouter></Switch></ul>
        </div>
        
    )
};

export default One;
