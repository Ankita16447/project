import React from 'react';

const Contact = () => 
{
  return (
    <div style={{backgroundColor:"whitesmoke"}}>
     
    <h1 style={{textAlign:"center", marginTop:"10px"}}>CONTACT US</h1>
    <h6 style={{textAlign:"center", fontSize:"12px"}}>For more information</h6>
    <div className="container form-group">
        <div className="col-lg-12"> 
        <form action="">
            <br />
            <input type="text" id="name" name="name" placeholder="Enter your name" className="form-control" onkeyup="check(name)" pattern="[A-Z]{15}" />
            <div id="print1"></div>
            <br />
            <input type="email" id="email" name="email" placeholder="Enter your email address" className="form-control" onkeyup="check(email)" pattern="[a-z][a-z0-9]{3,15}[@][a-z]{3,10}[.][a-z]{2,10}[.in]*" />
            <div id="print2"></div>
            <br />
            <input type="text" id="phone" name="phone" placeholder="Enter your phone number" className="form-control" onkeyup="check(phone)" pattern="[7-9][0-9]{9}" />
            <div id="print3"></div>
            <br />
            <textarea name="address" id="address" cols="30" rows="10" placeholder="Enter your current address" onkeyup="check(address)" className="form-control"></textarea>
            <div id="print4"></div>
            <br />
            <button id="submit" className="form-control btn btn-dark" >Submit</button>
            <br /><br />
        </form>
    </div>
</div>

</div>


  )
}

export default Contact;
