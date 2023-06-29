import React from 'react';
import visa from '../assets/visa.jpg';

const Payment = () => {
  return (
    <div>
      <div className="container" style={{display:"flex" , flexDirection:"row"}}>
        <div className="top" style={{width:"49vw",height:"400px"}}>
            <img src={visa} alt="" />
        </div>
        <div className="bottom" style={{width:"49vw",height:"400px", marginTop:"10px"}}>
            {/* <h2 style={{color:"white"}}>Order Now</h2> */}
            <form action=""  style={{backgroundColor:"black", height:"380px"}}>
            <h2 style={{color:"white", textAlign:"center"}}>Order Now</h2>
                <input style={{width:"96%", padding:"10px", margin:"10px"}} type="email" id="email" className="email" placeholder="email address"></input>
                <br />
                <input style={{width:"96%", padding:"10px", margin:"10px"}} type="number" id="num" className = "num" placeholder="card number"></input>
                <br />
                <input style={{width:"50%", padding:"10px", margin:"10px"}} type="date" id="date" className="date" placeholder="expiration date"></input>
                <input style={{width:"43%", padding:"10px", margin:"10px"}} type="number" id="ss" className="ss" placeholder="security code"></input>
                <br />
                <input style={{width:"96%", padding:"10px", margin:"10px"}} type="text" id="name" className="name" placeholder="name on the card"></input>
                <br />

                <p style={{color:"white", textAlign:"center"}}>By placing order you agree to the Terms and conditions</p>
                <br />
                <button className="btn" style={{backgroundColor:"white", color:"black", padding:"5px", margin:"7px", borderRadius:"8px", fontSize:"15px"}}>Place order</button>

            </form>
        </div>

      </div>
    </div>
  )
}

export default Payment
