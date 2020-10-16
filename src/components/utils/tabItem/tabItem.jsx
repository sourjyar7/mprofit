import React  , { useContext }from 'react';
import { TabItemStyleContext } from '../../../contexts/tabItemStyleContext/tabItemStyleContext';

const TabItem = (props) => {

    const { containerStyle , imageStyle , textStyle } = useContext(TabItemStyleContext);

    return ( 
        <div id="container" style={containerStyle}>
            
            <div id="image" style={imageStyle}> 
                <img src={props.imageSrc} alt="" width="30px"/>
            </div>
            
            
                   
            <div id="texts" style={textStyle}> 
              {props.bodyText}
            </div>
            
        </div>
     );
}
 
export default TabItem;