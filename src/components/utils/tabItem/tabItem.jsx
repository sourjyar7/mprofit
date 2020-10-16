import React from 'react';
import { data } from './tabItem_config';

const TabItem = (props) => {
    return ( 
        <div id="container" style={data.containerStyle}>
            
            <div id="image" style={data.imageStyle}> 
                <img src={props.imageSrc} alt="" width="30px"/>
            </div>
            
            
                   
            <div id="texts" style={data.textStyle}> 
              {props.bodyText}
            </div>
            
        </div>
     );
}
 
export default TabItem;