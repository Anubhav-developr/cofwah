import { Link } from 'react-router-dom';
import { Route , Router } from 'react-router-dom'
import Snitisel1 from '../components/Snitisel1';
const One = () => {
    return (
        <div className="csskabaap">
         <ul>
        <li><Link to='./One/hs'>मिथक 1: हैंड सैनिटाइज़र कीटाणुओं को दूर रखने का नंबर 1 उपाय है।</Link></li> 
        <Route path="./One/hs" exact>
        सच्चाई: साबुन और पानी है - जब आप 20 सेकंड के लिए स्क्रब करते हैं। इसके अलावा, सैनिटाइटर का बार-बार उपयोग आपको लंबे समय में एलर्जी से ग्रस्त कर सकता है, ऐसा डॉ राधा गोंगती, वरिष्ठ सलाहकार त्वचाविज्ञान, अपोलो टेलीहेल्थ, हैदराबाद कहते हैं। 2019 में मार्च से जून के इसी महीनों की तुलना में, 2020 में त्वचा एलर्जी के मामलों की संख्या दोगुनी हो गई है। “जहां पहले मैंने एक महीने में पांच या छह मामले देखे थे, अब मुझे नौ हाथ एक्जिमा (एक ऐसी स्थिति जहां) प्राप्त हुई है। एक महीने में त्वचा शुष्क, परतदार और खुजलीदार हो जाती है) शिकायतें - कुछ नए मामले और कुछ मौजूदा मामले जो बढ़ गए, ”वह कहती हैं।
    </Route>
    <li></li>
             
         </ul>
        </div>
    )
};

export default One;