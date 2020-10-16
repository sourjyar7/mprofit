import React , { createContext , useState } from 'react';
import { data } from './cardStyle_config';

export const CardStyleContext = createContext();

const CardStyleContextProvider = (props) => {
    
    const [cardStyle, setcardStyle] = useState(data.cardStyle);
    const [imageStyle, setimageStyle] = useState(data.imageStyle);
    const [cardTitleStyle, setcardTitleStyle] = useState(data.cardTitleStyle);
    const [tabItemStyle, settabItemStyle] = useState(data.tabItemStyle);

    return ( 
        <CardStyleContext.Provider value={{cardStyle,imageStyle,cardTitleStyle,tabItemStyle}}>
            {props.children}
        </CardStyleContext.Provider>
     );
}
 
export default CardStyleContextProvider;
