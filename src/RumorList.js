import { Link } from 'react-router-dom';

const RumorList = () => {
return(
<div>

<ul>
      <li><Link to='/One'>हैंड सैनिटाइज़र का उपयोग (Using Hand Sanitizer)</Link></li>
        <li><Link to='/Two'>रक्त प्रकार और कोरोनावायरस (Blood type and Coronavirus)</Link></li>
        <li><Link>एंटीबायोटिक्स और कोरोना (Antibiotics and corona)</Link></li>
        <li><Link>5जी रेडियेशन और कोरोनावायरस (5g Radiation and Coronavirus Linkage)</Link></li> </ul>
</div>

)
    
};

export default RumorList;