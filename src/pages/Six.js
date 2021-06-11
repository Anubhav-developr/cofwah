import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './CSS_ke_log/six.css';
function Six() {
  return (
    <div>
      <ul>
        <Link to='/blackfngus/f'><li className="op">पहला मिथक : ब्लैक फंगस संक्रामक रोग है</li></Link>
        <Route path="/blackfngus/f" exact> ब्लैक फंगस संक्रामक नहीं है, जिसका अर्थ है कि यह मनुष्यों या जानवरों के संपर्क से नहीं फैल सकता है। लेकिन यह फफूंद बीजाणुओं से फैलता है जो हवा या वातावरण में मौजूद होते हैं। कुछ लोगों को यह भी लगता है कि फल खाने से ऐसा हो सकता है। एक कोविड संक्रमण के साथ अनियंत्रित डायबिटीज रोगी के लिए ब्लैक फंगस विकसित करने का प्रमुख कारण है</Route>
        <Link to='/blackfngus/s'><li className="op">दूसरा मिथक : कच्चा खाना खाने से व्यक्ति ब्लैक फंगस से संक्रमित हो सकता है |</li></Link>
        <Route path="/blackfngus/s" exact>
इस दावे का समर्थन करने के लिए अब तक कोई डेटा उपलब्ध नहीं है।</Route>
      
      </ul>
    </div>
  );
}

export default Six;
