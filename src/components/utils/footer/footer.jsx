import React , { useContext } from 'react';
import { FaLinkedin , FaFacebook , FaGithub } from 'react-icons/fa';
import  './footer.css';
import { FooterContext } from '../../../contexts/footerContext/footerContext';

const Footer = () => {

    const { firstCol , secondCol ,thirdCol } = useContext(FooterContext);

    return (<div className="container">
                <div className="row mx-auto">
                    <div className="col d-sm-block d-md-inline">
                        <h5>{firstCol.head}</h5>   
                        {firstCol.rows.map((item) =><span key={item} className="d-block my-3 onHover">{item}</span>)}
                    </div>
                    
                    <div className="col d-sm-block d-md-inline">
                        <h5>{secondCol.head}</h5>  
                        {secondCol.rows.map((item) =><span key={item} className="d-block my-3 onHover">{item}</span>)}     
                    </div>

                    <div className="col">
                        <h5>{thirdCol.head}</h5>   
                        {thirdCol.rows.map((item) =><span key={item} className="d-block my-3 onHover">{item}</span>)}
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
