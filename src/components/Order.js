import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className="order">
      <div className="order__details">
        <div className="order__details__date">
          <div className="order__details__lineOne">ORDER PLACED</div>
          <div className="order__details__lineTwo">
            {moment.unix(order.data.created).format("D MMMM YYYY")}
          </div>
        </div>
        <div className="order__details__total">
          <div className="order__details__lineOne">TOTAL</div>
          <div className="order__details__lineTwo">
            <CurrencyFormat
              decimalScale={2}
              value={order.data.amount / 100}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              renderText={(value) => <>{value}</>}
            />
          </div>
        </div>
        <div className="order__details__shipping">
          <div className="order__details__lineOne">DELIVER TO</div>
          <div className="order__details__lineTwo product__infoTitle">
            Saeed
          </div>
        </div>
        <div className="order__details__id">
          <div className="order__details__lineOne">ORDER # {order.id}</div>
          <div className="order__details__lineTwo product__infoTitle">
            View order details
          </div>
        </div>
      </div>
      <div className="order__product">
        {order.data.basket?.map((item) => (
          <CheckoutProduct
            key={Math.random()}
            id={item.id}
            image={item.image}
            price={item.price}
            rating={item.rating}
            title={item.title}
            hideButton
          />
        ))}
      </div>
      <div className="orders__buttonHolder">
        <button className="login__signInButton">Problem with order</button>
        <button className="login__registerButton">
          Write a production review
        </button>
        <button className="login__registerButton">Archive order</button>
      </div>
    </div>
  );
}

export default Order;
