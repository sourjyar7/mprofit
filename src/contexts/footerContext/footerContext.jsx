import  React , { createContext , useState } from 'react';
import { data } from './footer_config';

export const FooterContext=createContext();

const FooterContextProvider = (props) => {
    const [ firstCol, setfirstCol ] = useState(data.col1);
    const [ secondCol, setsecondCol ] = useState(data.col2);
    const [ thirdCol, setthirdCol ] = useState(data.col3);
        
    
    return (
        <FooterContext.Provider value={{firstCol,secondCol,thirdCol}}>
            {props.children}
        </FooterContext.Provider>
      );
}
 
export default FooterContextProvider;