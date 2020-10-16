import React , { useContext } from 'react';
import TabItem from '../tabItem/tabItem';
import { CardStyleContext } from '../../../contexts/cardStyleContext/cardStyleContext';
import './card.css';


const Card = (props) => {

    const { cardStyle, imageStyle, tabItemStyle } = useContext(CardStyleContext);

    return ( 
     <div className="card" style={cardStyle}>
         
         <div className="row">
                
                <div className="col">
                <img src={props.imageSrc} className="card-img-top" alt="" style={imageStyle}/>
                </div>

         </div>

         <div className="row" style={tabItemStyle}>
             
             <div className="col">
                <TabItem bodyText={props.titleText} imageSrc={props.iconSrc}></TabItem>
             </div>
             
         </div>
         
     </div>
     );
}
 
export default Card;

