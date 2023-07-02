import React from 'react';
import img1 from "../assets/founder.png";
import img2 from "../assets/director.png";
import img3 from "../assets/designer.png";
import img4 from "../assets/assistant.png";


const About = () => {
  return (
    <div>
        <div className="container-fluid col-lg-12">
                <div className="top container-fluid">
                    <h1 style={{textAlign:"center", fontWeight:"bold", padding:"5px"}}>OUR MISSION</h1>
                    <br/>
                    <p style={{wordWrap:"break-word"}}>ShoppingBazar.com is one of biggest Online Mall with a vision to take Indian and Global Consumers 
                    to next level of shopping. Our Mission & Vision is to provide best valued products to our 
                    customers across Globe. We provide best shopping solutions to our customers, enable our brand 
                    partners to reach the widest audience along with 7 Days Money Back Guarantee & 30 days Returns.</p>
                    
                </div>

            <br />
            <div className="bottom">
                <h1 style={{textAlign:"center", marginBottom:"10px", fontWeight:"bold"}}>MEET OUR TEAM</h1>
                <div className="row" style={{backgroundColor:"whiteSmoke"}}>
                    <div className="col-lg-3">
                        <div className="card" style={{width: "15rem;"}}>
                            <img src={img1} className="card-img-top" alt=""  style={{height:"160px;"}} />
                            <div className="card-body">
                                <h2 style={{textAlign:"center"}}>Jane Doe</h2>
                                <h5 className="card-title" style={{fontSize:"13px"}}>CEO & Founder</h5>
                                <p style={{fontSize:"13px", marginBottom:"5px"}}>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <h3 style={{fontWeight:"bold",fontSize:"13px",marginBottom:"8px"}}>jane@example.com</h3>
                                <button id="submit" className="form-control btn btn-dark" >Contact</button>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="card" style={{width: "15rem;"}}>
                            <img src={img2} className="card-img-top"  alt="" style={{height:"160px;"}}/>
                            <div className="card-body">
                                <h2 style={{textAlign:"center"}}>Mike Roy</h2>
                                <h5 className="card-title" style={{fontSize:"13px"}}>Director</h5>
                                <p style={{fontSize:"13px",marginBottom:"5px"}}>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <h3 style={{fontWeight:"bold",fontSize:"13px",marginBottom:"8px"}}>mike@example.com</h3>
                                <button id="submit" className="form-control btn btn-dark" >Contact</button>

                            </div>
                        </div>          
                    </div>

                    <div className="col-lg-3">
                        <div className="card" style={{width: "15rem;"}}>
                            <img src={img4} className="card-img-top"  alt="" style={{height:"160px;"}}/>
                            <div className="card-body">
                                <h2 style={{textAlign:"center"}}>Ross Neil</h2>
                                <h5 className="card-title" style={{fontSize:"13px"}}>Assistant</h5>
                                <p style={{fontSize:"13px",marginBottom:"5px"}}>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <h3 style={{fontWeight:"bold",fontSize:"13px",marginBottom:"8px"}}>rose@example.com</h3>
                            <button id="submit" className="form-control btn btn-dark" >Contact</button>
                            </div>
                        </div>          
                    </div>

                    <div class="col-lg-3">
                        <div class="card" style={{width: "15rem;"}}>
                            <img src={img3} className="card-img-top" alt="" style={{height:"160px;"}} />
                            <div class="card-body">
                                <h2 style={{textAlign:"center"}}>John Doe</h2>
                                <h5 class="card-title" style={{fontSize:"13px"}}>Designer</h5>
                                <p style={{fontSize:"13px",marginBottom:"5px"}}>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <h3 style={{fontWeight:"bold",fontSize:"13px",marginBottom:"8px"}}>john@example.com</h3>
                                <button id="submit" className="form-control btn btn-dark" >Contact</button>
                            </div>
                        </div>          
                    </div>

                </div>

            </div>
            <br />
        </div>
    </div>
  )
}

export default About;
