import React from 'react';
import Card from '../card/card';
import { data } from '../jumbotronHorizontal/jumbotronHorizontal_config';

const HorizontalJumbotron = (props) => {
    return (<div className="jumbotron">
             <div className="container">
              
              <div className="row">
                  <div className="col">
                  <div className="display-5" style={data.headingStyle}>{props.headingText}</div>
                  <p className="lead" style={data.paraStyle}>{props.bodyText}</p>
                  </div>
              </div>
             </div>
             <div className="container" > 

               <div className="row" style={{alignItems : 'center'}}>
                  <div className="col-lg-4 col-md-6 col-sm-12" style={{padding :'50px 2px 5px 2px'}}>
                  <Card imageSrc="researching.svg" titleText="Add and track multiple assets" bodyText=""></Card>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12" style={{padding :'50px 2px 5px 2px'}}>
                  <Card imageSrc="fileformats.svg" titleText="Auto import data from json files" bodyText=""></Card>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12" style={{padding :'50px 2px 5px 2px'}}>
                  <Card imageSrc="returns.svg" titleText="Get realtime portfolio valuations" bodyText=""></Card>                   
                  </div>
               </div>   
             
             </div>
            </div>
          );
}
 
export default HorizontalJumbotron;