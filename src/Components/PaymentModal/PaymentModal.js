import React, { useEffect, useState } from "react";
import "./PaymentModal.css";
import Payment from "../Payment/Payment";
function PaymentModal({ amount, isPaymentOpen, toggleModal,userEmail,loginStatus }) {
  
  const [modalClose, setModalClose] = useState("");
  useEffect(() => {
    if (isPaymentOpen) {
      setModalClose(""); // Modal is open, no close class
    } else {
      setModalClose("modalClose"); // Modal is closed, apply close class
    }
  }, [isPaymentOpen]);
  return (
    <div className={`paymentModal-main ${modalClose}`}>
      <div
        className="paymentModal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <Payment amount={amount} toggleModal={toggleModal} userEmail={userEmail} loginStatus={loginStatus}/>
      </div>
    </div>
  );
}

export default PaymentModal;
