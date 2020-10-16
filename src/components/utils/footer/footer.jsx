import React from 'react';
import { FaLinkedin , FaFacebook , FaGithub } from 'react-icons/fa';
import  './footer.css';

const Footer = () => {
    return (<div className="container">
                <div className="row mx-auto">
                    <div className="col d-sm-block d-md-inline">
                        <h5>MProfit</h5>   
                        <span className="d-block my-3 onHover">Features</span>
                        <span className="d-block my-3 onHover">Pricing</span>
                        <span className="d-block my-3 onHover">Signup</span>
                        <span className="d-block my-3 onHover">Reviews</span>
                        <span className="d-block my-3 onHover">Import</span>    
                    </div>
                    
                    <div className="col d-sm-block d-md-inline">
                    <h5>Company</h5>   
                        <span className="d-block my-3 onHover">About Us</span>
                        <span className="d-block my-3 onHover">Terms Of Service</span>
                        <span className="d-block my-3 onHover">Privacy Policy</span>
                        <span className="d-block my-3 onHover">Referal Policy</span>
                    </div>

                    <div className="col">
                    <h5>Help</h5>   
                        <span className="d-block my-3 onHover">MProfit Help</span>
                        <span className="d-block my-3 onHover">Contact Us</span>
                    </div>
                </div>
                <hr/>
                <div className="row">
                      <div className="col-lg-6 col-sm-12">
                         <div className="d-sm-block d-md-inline d-lg-inline" style={{fontWeight : 'bold'}}>Developer : Sourjya Mukherjee</div>
                         <div className="d-sm-block d-md-inline d-lg-inline" style={{fontWeight : 'bold'}}>( sourjyar7@gmail.com )</div>
                      </div>

                      <div className="col">
                         <span style={{fontWeight : 'bold'}}><p className="d-inline">Connect With Sourjya  </p></span>
                         <span><FaLinkedin className="mx-2 onHoverIcons" size="1.5em"/>   <FaGithub className="mx-2 onHoverIcons" size="1.5em"/>   <FaFacebook className="mx-2 onHoverIcons" size="1.5em"/></span>
                      </div>

                      
                </div>
            </div>
      );
}
 
export default Footer;
