import React, { useState } from "react";
// import visa from '../assets/visa.jpg';

const Payment = () => {
  const [userData, setUserData] = useState({
    email: "",
    card_number: "",
    date: "",
    security_code: "",
    card_name: "",
    amount: "",
  });

  let name, value;

  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connection with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { email, card_number, date, security_code, card_name, amount } =
      userData;
    if (email && card_number && date && security_code && card_name && amount) {
      const res = fetch(
        "https://react-firebase-ea5ab-default-rtdb.firebaseio.com/paymentRecord.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            card_number,
            date,
            security_code,
            card_name,
            amount,
          }),
        }
      );

      if (res) {
        setUserData({
          email: "",
          card_number: "",
          date: "",
          security_code: "",
          card_name: "",
          amount: "",
        });
        alert("Data stored");
      } else {
        alert("please fill the data");
      }
    } else {
      alert("please fill the data");
    }
  };

  return (
    <div>
      <div className="container form-group">
        <h2 style={{ textAlign: "center", fontSize: "20px", margin: "20px" }}>
          Order Now
        </h2>

        <div
          className="col-lg-12"
          style={{
            height: "100%",
            marginTop: "20px",
            backgroundColor: "#121212",
            marginBottom: "20px",
          }}
        >
          <br />
          <form action="" method="POST">
            <input
              style={{ width: "96%" , padding:"10px", margin:"10px"}}
              type="email"
              id=""
              name="email"
              placeholder="email address"
              className="form-control"
              value={userData.email}
              onChange={postUserData}
            />
            <br />

            <input
              style={{ width: "96%", padding: "10px", margin: "10px" }}
              type="number"
              id=""
              name="card_number"
              placeholder="card number"
              className="form-control"
              value={userData.card_number}
              onChange={postUserData}
            />
            <br />

            {/* <div className={{display:"flex" , flexdirection:"row"}}> */}
            <input 
              style={{ width: "48%", padding: "10px", margin: "10px" }}
              type="date"
              id=""
              name="date"
              placeholder="expiration date"
              className="form-control"
              value={userData.date}
              onChange={postUserData}
            />

            <input
              style={{ width: "48%", padding: "10px", margin: "10px" }}
              type="number"
              id=""
              name="security_code"
              placeholder="security code"
              className="form-control"
              value={userData.security_code}
              onChange={postUserData}
            />
            <br />
            {/* </div> */}

            <input
              style={{ width: "96%", padding: "10px", margin: "10px" }}
              type="text"
              id=""
              name="card_name"
              placeholder="name on the card"
              className="form-control"
              value={userData.card_name}
              onChange={postUserData}
            />
            <br />

            <input
              style={{ width: "96%", padding: "10px", margin: "10px" }}
              type="number"
              id=""
              name="amount"
              placeholder="Enter the amount"
              className="form-control"
              value={userData.amount}
              onChange={postUserData}
            />
            <br />

            <p style={{ color: "white", textAlign: "center" }}>
              By placing order you agree to the Terms and conditions
            </p>
            <br />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button className="btn btn-outline-light" onClick={submitData}>
                Place order
              </button>
            </div>
            <br />
          </form>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Payment;
