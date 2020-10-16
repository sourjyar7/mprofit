import React , { useContext } from 'react';
import TabItem from '../tabItem/tabItem';
import { CardStyleContext } from '../../../contexts/cardStyleContext/cardStyleContext';
import './card.css';
import TabItemStyleContextProvider from '../../../contexts/tabItemStyleContext/tabItemStyleContext';


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
                <TabItemStyleContextProvider>
                    <TabItem bodyText={props.titleText} imageSrc={props.iconSrc}></TabItem>
                </TabItemStyleContextProvider>
             </div>

         </div>
         
     </div>
     );
}
 
export default Card;

