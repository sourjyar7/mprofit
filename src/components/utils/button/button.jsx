import React from 'react';
import { data } from './button_config';

const Button = (props) => {
    return ( 
    <button type="button" className={`btn ${data.styleClass}`}>{data.buttonText}</button>
     );
}
 
export default Button;