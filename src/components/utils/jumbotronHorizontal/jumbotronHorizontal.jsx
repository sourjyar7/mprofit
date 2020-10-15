import React from 'react';
import Button from '../button/button';
import Card from '../card/card';
import { data } from '../jumbotronHorizontal/jumbotronHorizontal_config';

//Todos
/*
 - make cards fully responsive
 - fix the alignment issue in card title text
   
 */
const modJumbotron=(headingText,bodyText,card1,card2,card3)=>{
  return (<div className="jumbotron"  >
  <div className="container">
   
   <div className="row">
       <div className="col">
       <div className="display-5" style={data.headingStyle}>{headingText}</div>
       <p className="lead" style={data.paraStyle}>{bodyText}</p>
       </div>
   </div>
  </div>
  <div className="container"  > 

    <div className="row" >
       <div className="col-lg-4 col-md-6 col-sm-12" style={data.imageColStyle}>
       <Card imageSrc={card1.imageSrc} titleText={card1.titleText} bodyText=""></Card>
       </div>
       <div className="col-lg-4 col-md-6 col-sm-12" style={data.imageColStyle}>
       <Card imageSrc={card2.imageSrc} titleText={card2.titleText} bodyText=""></Card>
       </div>
       <div className="col-lg-4 col-md-12 col-sm-12" style={data.imageColStyle}>
       <Card imageSrc={card3.imageSrc} titleText={card3.titleText} bodyText=""></Card>                   
       </div>
    </div>   
  
  </div>
 </div>);
}

const simpleJumbotron=(headingText,bodyText,buttonText)=>{
  return (
    <div style={data.simpleJumboStyle}>
        <div className="container">
            <div className="row"  >
                <div className="col text-center" >
                <div className="display-5" style={data.simpleJumboHeadingStyle}>{headingText}</div>
                <p className="lead" style={data.simpleJumboParaStyle}>{bodyText}</p>
                <Button buttonText={buttonText}></Button>
                </div>
            </div>
        </div>
    </div>
  );
}

const HorizontalJumbotron = ({isSimple,headingText,bodyText,buttonText,card1,card2,card3}) => {
    
    if(isSimple){
      return simpleJumbotron(headingText,bodyText,buttonText);
    }
    else{
      return modJumbotron(headingText,bodyText,card1,card2,card3);
    }
}
 
export default HorizontalJumbotron;