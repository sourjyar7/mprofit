import React , { createContext , useState }from 'react';
import { data } from './tabItemStyleContext_config';

export const TabItemStyleContext=createContext();

const TabItemStyleContextProvider = (props) => {

    const [containerStyle, setcontainerStyle ] = useState(data.containerStyle);
    const [imageStyle, setimageStyle ] = useState(data.imageStyle);
    const [textStyle, settextStyle ] = useState(data.textStyle);

    return (
        <TabItemStyleContext.Provider value={{ containerStyle , imageStyle , textStyle }}>
            {props.children}
        </TabItemStyleContext.Provider>
      );
}
 
export default TabItemStyleContextProvider;