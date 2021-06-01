import { Link } from 'react-router-dom';
import { Route , Router } from 'react-router-dom'
import Snitisel1 from '../components/Snitisel1';
const One = () => {
    return (
        <div className="csskabaap">
         <ul>
        <li><Link to='./One/hs'>हैंड सैनिटाइज़र अक्सर इस्तेमाल किया जा सकता है</Link></li> 
        <Route path="./One/hs" exact>
           अल्कोहल-आधारित सैनिटाइज़र एंटीबायोटिक प्रतिरोध नहीं बनाता है। अन्य एंटीसेप्टिक्स और एंटीबायोटिक दवाओं के विपरीत, रोगजनक (हानिकारक रोगाणु) अल्कोहल-आधारित सैनिटाइज़र के लिए प्रतिरोध विकसित नहीं करते हैं।
        
    </Route>
    <li><Link to='./One/hd">अल्कोहल-आधारित सैनिटाइज़र सभी के उपयोग के लिए सुरक्षित हैं</Link></li>
             <Route path="./One/hd" exact>सैनिटाइज़र में अल्कोहल कोई प्रासंगिक स्वास्थ्य समस्या पैदा करने के लिए नहीं दिखाया गया है। थोड़ा अल्कोहल त्वचा में अवशोषित हो जाता है, और अधिकांश उत्पादों में त्वचा का सूखापन कम करने के लिए एक कम करनेवाला होता है। एलर्जिक कॉन्टैक्ट डर्मेटाइटिस और अल्कोहल के कारण हाथों के बालों का सफेद होना बहुत ही दुर्लभ प्रतिकूल प्रभाव हैं। दुर्लभ मामलों में आकस्मिक निगलने और नशा का वर्णन किया गया है।</Route>
       <li><Link to='./One/ht'>जिन धर्मों में शराब प्रतिबंधित है, वहां अल्कोहल आधारित सैनिटाइज़र का उपयोग किया जा सकता है</Link></li>
             <Route path="./One/ht" exact>बीमारी को कम करने या बेहतर स्वास्थ्य में योगदान करने के लिए विकसित किसी भी निर्मित पदार्थ को कुरान द्वारा अनुमति दी गई है, जिसमें एक चिकित्सा एजेंट के रूप में उपयोग की जाने वाली शराब भी शामिल है (بیماری کے خاتمے یا بہتر صحت میں شراکت کے ل developed تیار کیا جانے والا کوئی بھی مادہ قرآن مجید کے ذریعہ اجازت دیتا ہے ، اس میں میڈیکل ایجنٹ کے طور پر الکحل بھی شامل ہے۔)</Route>
            <li><Link to='./One/hp'>अपने हाथों को बार-बार साफ करना और दस्ताने नहीं पहनना सुरक्षित है</Link></li>
             <Route path="./One/hp" exact>दस्ताने पहनने से कीटाणु एक सतह से दूसरी सतह पर चले जाते हैं और उन्हें हटाते समय आपके हाथ दूषित हो जाते हैं। दस्ताने पहनने से हाथ साफ करने की जगह नहीं आती। स्वास्थ्य कार्यकर्ता केवल विशिष्ट कार्यों के लिए दस्ताने पहनते हैं।</Route>
         <li><Link to='./One/hk'>अल्कोहल-आधारित सैनिटाइज़र की सांप्रदायिक बोतल को छूने से आप संक्रमित नहीं होंगे</Link></li>
             <Route path="./One/hk" exact>एक बार जब आप अपने हाथों को साफ कर लेते हैं, तो आपने उन्हें बोतल पर मौजूद किसी भी कीटाणु से कीटाणुरहित कर दिया होगा। यदि हर कोई सार्वजनिक स्थान जैसे सुपरमार्केट के प्रवेश द्वार पर सैनिटाइज़र का उपयोग करता है, तो सांप्रदायिक वस्तुओं पर कीटाणुओं का जोखिम कम होगा और सभी को सुरक्षित रखने में मदद मिलेगी।</Route>

<li><Link to='./One/htm'>आपके द्वारा उपयोग किए जाने वाले अल्कोहल-आधारित सैनिटाइज़र की मात्रा मायने रखती है</Link></li>
             <Route path="./One/htm" exact>अपने हाथों की सभी सतहों को ढकने के लिए मुट्ठी भर अल्कोहल-आधारित सैनिटाइज़र लगाएं। अपने हाथों को सही तकनीक का उपयोग करके तब तक रगड़ें जब तक कि वे सूख न जाएं। पूरी प्रक्रिया 20-30 सेकंड तक चलनी चाहिए।</Route>
</ul>
        </div>
    )
};

export default One;
