import React from 'react';
import { data } from './card_config';
import '/public/portfolio.svg';


const Card = (props) => {
    return ( 
     <div className="card" style={data.cardStyle}>
         <img src={data.imageSrc} className="card-img-top" alt="" style={data.imageStyle}/>
     <h5 className="card-title" style={data.cardTitleStyle}>{data.cardTitleText}</h5>
         <div className="card-body">
     <p className="card-text">{data.cardBodyText}</p>
         </div>
     </div>
     );
}
 
export default Card;

