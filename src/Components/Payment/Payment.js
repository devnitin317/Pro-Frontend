import React, { useState } from "react";
import axios from "axios";
import "./Payment.css";
import Spinner from "../CommonComponents/Spinner/Spinner";
import { useSelector } from "react-redux";
import Popup from "../CommonComponents/Popup/Popup";
function Payment({ amount, toggleModal, userEmail, loginStatus }) {
  // const [responseId, setResponseId] = useState("");
  const [responseState, setResponseState] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const baseUrl = useSelector((state) => state.app.baseUrl);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");

      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const createRazorpayOrder = (amount) => {
    setShowSpinner(true);

    let data = JSON.stringify({
      amount: amount * 100,
      currency: "INR",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      // url: "http://localhost:5001/api/user/orders",
      url: `${baseUrl}api/user/orders`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then(async (response) => {
        console.log(JSON.stringify(response.data));
        await handleRazorPayScreen(
          response.data.amount,
          response.data.order_id
        );
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleRazorPayScreen = async (amount, orderId) => {
    setShowSpinner(false);
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Some error at razorpay screen loading");
      return;
    }

    const options = {
      key: "rzp_test_nOckMaloY1k1G0",
      amount: amount,
      currency: "INR",
      name: "Nitin's Zone",
      description: "Payment to Nitin",
      Image: "https://papayacoders.com/demo.png",
      order_id: orderId,
      handler: async function (response) {
        // setResponseId(response.razorpay_payment_id);
        console.log(response);
        setShowSpinner(true);
        await handlePaymentSuccess(response);
      },
      prefill: {
        name: "Nitin",
        email: "nitinsingh919293@gmail.com",
      },
      theme: {
        color: "#F4C430",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handlePaymentSuccess = async (response) => {
    try {
      const bodyData = {
        order_id: response.razorpay_order_id,
        payment_id: response.razorpay_payment_id,
        signature: response.razorpay_signature,
        userEmail: userEmail,
      };
      await axios
        // "http://localhost:5001/api/user/paymentSuccess"
        .post(`${baseUrl}api/user/paymentSuccess`, bodyData, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then(async (d) => {
          setShowSpinner(false);
          if (d.data.paymentSuccess === true) {
            let data = { paymentVerified: true };
            loginStatus(data);
            // setShowPopup(true);
            alert("Payment Successfull");
          }
          console.log(d.data.paymentSuccess);
        })
        .catch((e) => {
          setShowSpinner(false);
          alert("Payment is not Successfull");
          console.log(e);
        });
    } catch (error) {
      console.error("Payment verification failed", error);
    }
  };

  const paymentFetch = (e) => {
    e.preventDefault();

    const paymentId = e.target.paymentId.value;

    axios
      // .get(`http://localhost:5001/api/user/payment/${paymentId}`)
      .get(`${baseUrl}api/user/payment"${paymentId}`)
      .then((response) => {
        console.log(response.data);
        setResponseState(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <div className="payment-main">
       
        <div className="payment-content">
          <div className="payment-content-head-close">
            <h3>Order Summary</h3>
            <span className="payment-content-close" onClick={toggleModal}>
              X
            </span>
          </div>
          <div className="payment-content-ele">
            <p className="payment-content-ele-title">Subtotal</p>
            <p className="payment-content-ele-amount">₹{amount}</p>
          </div>
          <div className="payment-content-ele">
            <p className="payment-content-ele-title">Total</p>
            <p className="payment-content-ele-amount">₹{amount}</p>
          </div>
          <button
            className="payment-content-button"
            onClick={() => createRazorpayOrder(amount)}
          >
            Pay Now
          </button>
          {/* {responseId && <p>{responseId}</p>} */}
          {showSpinner ? <Spinner /> : <></>}
        </div>
      </div>
    </div>
  );
}

export default Payment;

{
  /* <h1>Payment verification form</h1>
<form onSubmit={paymentFetch}>
  <input type="text" name="paymentId" />
  <button type="submit">Fetch Payment</button>
  {responseState.length !== 0 && (
    <ul>
      <li>{responseState.amount / 100} Rs</li>
      <li>{responseState.currency}</li>
      <li>{responseState.status}</li>
      <li>{responseState.method}</li>
    </ul>
  )}
</form> */
}
