import React from "react";
import "./Success.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useHistory } from "react-router-dom";

function Success() {
  const history = useHistory();
  return (
    <div className="success">
      <div className="success__container">
        <div className="success__messageContainer">
          <CheckCircleIcon className="success__messageIcon" />
          <h2>Thank you, your order has been confirmed!</h2>
        </div>
        <p className="success__message">
          Thank you for shopping with us. We'll send a confirmation once your
          item has shipped. If you would like to check the status of your
          order(s) please press the link below.
        </p>
        <button
          className="amazonBtn"
          style={{ marginTop: "20px" }}
          onClick={() => history.replace("/orders")}
        >
          Go to my orders
        </button>
      </div>
    </div>
  );
}

export default Success;
