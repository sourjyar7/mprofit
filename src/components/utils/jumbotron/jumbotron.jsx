import React , { useContext } from 'react';
import Button from '../button/button';
import { JumbotronStyleContext } from '../../../contexts/jumbotronStyleContext/jumbotronStyleContext';


const Jumbotron = (props) => {

  const { headingStyle, imageStyle } = useContext(JumbotronStyleContext);

    return (
        <div className="jumbotron">
            <div className="container">
              <div className="row">
                <div className="col" >
                <img src={props.imageSrc} alt="" style={imageStyle}></img>
                </div>
                <div className="col">
                <div className="display-5" style={headingStyle}>{props.headingText}</div>
                <p className="lead">{props.bodyText}</p>
                <Button buttonText="Get Started"></Button>    
              </div>
             </div>   
           </div>
        </div>
      );
}
 
export default Jumbotron;