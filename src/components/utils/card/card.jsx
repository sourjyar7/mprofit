import React from 'react';
import TabItem from '../tabItem/tabItem';
import { data } from './card_config';
import '/public/portfolio.svg';
import './card.css';


const Card = (props) => {
    return ( 
     <div className="card" style={data.cardStyle}>
         <div className="row">
                <div className="col">
                <img src={props.imageSrc} className="card-img-top" alt="" style={data.imageStyle}/>
                </div>
         </div>
         <div className="row" style={data.tabItemStyle}>
             <div className="col">
                <TabItem bodyText={props.titleText} imageSrc={props.image2Src}></TabItem>
             </div>
         </div>
         
     </div>
     );
}
 
export default Card;

