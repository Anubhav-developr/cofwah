import { Link } from 'react-router-dom';
import { Route, Router } from 'react-router-dom';
function Six() {
  return (
    <div>
      <ul>
        <li><Link to='/blackfngus/f'>पहला मिथक : ब्लैक फंगस संक्रामक रोग है</Link></li>
        <Route path="/blackfngus/f" exact><p>सत्य</p> ब्लैक फंगस संक्रामक नहीं है, जिसका अर्थ है कि यह मनुष्यों या जानवरों के संपर्क से नहीं फैल सकता है। लेकिन यह फफूंद बीजाणुओं से फैलता है जो हवा या वातावरण में मौजूद होते हैं। कुछ लोगों को यह भी लगता है कि फल खाने से ऐसा हो सकता है। एक कोविड संक्रमण के साथ अनियंत्रित डायबिटीज रोगी के लिए ब्लैक फंगस विकसित करने का प्रमुख कारण है</Route>
        <li><Link to='/blackfngus/s'>दूसरा मिथक : कच्चा खाना खाने से व्यक्ति ब्लैक फंगस से संक्रमित हो सकता है |</Link></li>
        <Route path="/blackfngus/s" exact><p>सत्य</p>
इस दावे का समर्थन करने के लिए अब तक कोई डेटा उपलब्ध नहीं है।</Route>
        <li><Link to='/blackfngus/t'></Link></li>
        <Route path="/blackfngus/t" exact></Route>
        <li><Link to='/blackfngus/fo'></Link></li>
        <Route path="/blackfngus/fo" exact></Route>
      </ul>
    </div>
  );
}

export default Six;
