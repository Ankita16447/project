import React , {useState} from 'react';
import visa from '../assets/visa.jpg';

const Payment = () => {
  const[userData, setUserData] = useState({
    email:"",
    card_number:"",
    date:"",
    security_code:"",
    card_name:"",
    amount:"",
  });

  let name, value;


  const postUserData = (event) =>
  {
    name = event.target.name;
    value = event.target.value;

    setUserData({...userData,[name]:value})
  };

  // connection with firebase
  const submitData = async (event) =>
  {
    event.preventDefault();
    const{ email,card_number,date,security_code,card_name, amount} = userData;
    if(email && card_number && date && security_code && card_name && amount)
    {

    
    const res = fetch('https://react-firebase-ea5ab-default-rtdb.firebaseio.com/paymentRecord.json',
    {
      method: "POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        email,card_number,date,security_code,card_name,amount
      }),
    }
    );

    if(res)
    {
      setUserData({
        email:"",
        card_number:"",
        date:"",
        security_code:"",
        card_name:"",
        amount:"",
      });
      alert("Data stored");
    }
    else
    {
      alert("please fill the data");
    }
  }
  else
  {
    alert("please fill the data");
  }
  }

  return (
    <div>
      <div className="container" style={{display:"flex" , flexDirection:"row"}}>
        <div className="top" style={{width:"49vw",height:"470px"}}>
            <img src={visa} alt="" style={{marginTop:"50px"}}/>
        </div>
        <div className="bottom" style={{width:"49vw",height:"400px", marginTop:"10px"}}>
            {/* <h2 style={{color:"white"}}>Order Now</h2> */}
            <form action=""  method= "POST" style={{backgroundColor:"black", height:"450px"}}>
            <h2 style={{color:"white", textAlign:"center"}}>Order Now</h2>
                <input style={{width:"96%", padding:"10px", margin:"10px"}} 
                type="email" id="" name="email" 
                placeholder="email address"
                value={userData.email}
                onChange={postUserData} />
                <br />

                <input style={{width:"96%", padding:"10px", margin:"10px"}} 
                type="number" id="" name = "card_number" 
                placeholder="card number" 
                value={userData.card_number}
                onChange={postUserData} />
                <br />

                <input style={{width:"50%", padding:"10px", margin:"10px"}} 
                type="date" id="" name="date" 
                placeholder="expiration date" 
                value={userData.date}
                onChange={postUserData} />

                <input style={{width:"43%", padding:"10px", margin:"10px"}} 
                type="number" id="" name="security_code" 
                placeholder="security code"
                value={userData.security_code}
                onChange={postUserData} />
                <br />

                <input style={{width:"96%", padding:"10px", margin:"10px"}} 
                type="text" id="" name="card_name" 
                placeholder="name on the card" 
                value={userData.card_name}
                onChange={postUserData} />
                <br />

                <input style={{width:"96%", padding:"10px", margin:"10px"}} 
                type="number" id="" name="amount" 
                placeholder="Enter the amount" 
                value={userData.amount}
                onChange={postUserData} />
                <br />

                <p style={{color:"white", textAlign:"center"}}>By placing order you agree to the Terms and conditions</p>
                <br />
                <button className="btn" 
                style={{backgroundColor:"white", color:"black", padding:"5px", margin:"7px", borderRadius:"8px", fontSize:"15px"}}
                onClick={submitData}>Place order</button>

            </form>
        </div>

      </div>
    </div>
  )
}

export default Payment
