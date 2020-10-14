import React from 'react';
//import '/public/investing.svg';
import Button from '../button/button';
import { data } from './jumbotron_config';


const Jumbotron = (props) => {
    return (
        <div className="jumbotron">
            <div className="container">
              <div className="row">
                <div className="col" >
                <img src={props.imageSrc} alt="" style={data.imageStyle}></img>
                </div>
                <div className="col">
                <div className="display-5" style={data.headingStyle}>{props.headingText}</div>
                <p className="lead">{props.bodyText}</p>
                <Button buttonText="Get Started"></Button>    
              </div>
             </div>   
           </div>
        </div>
      );
}
 
export default Jumbotron;