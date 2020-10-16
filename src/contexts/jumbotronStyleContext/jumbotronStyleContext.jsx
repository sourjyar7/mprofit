import React , { createContext , useState } from 'react';
import { data } from './jumbotronStyleContext_config';

export const JumbotronStyleContext = createContext();

const JumbotronStyleContextProvider = (props) => {
    
    const [imageStyle, setimageStyle] = useState(data.imageStyle);
    const [headingStyle, setheadingStyle] = useState(data.headingStyle);
    
    return ( 
        <JumbotronStyleContext.Provider value={{ headingStyle, imageStyle }}>
            {props.children}
        </JumbotronStyleContext.Provider>
     );
}
 
export default JumbotronStyleContextProvider;