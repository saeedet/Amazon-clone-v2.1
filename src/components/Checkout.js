import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../data/StateProvider";
import { getBasketTotal } from "../data/reducer";
import CurrencyFormat from "react-currency-format";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__header">
          <h2 className="checkout__title">
            {basket.length ? "Shopping Cart" : "Your Amazon Cart is empty"}
          </h2>
          <span>{basket.length ? "Price" : ""}</span>
        </div>
        {basket.map((item) => (
          <CheckoutProduct
            key={Math.random()}
            id={item.id}
            image={item.image}
            price={item.price}
            rating={item.rating}
            title={item.title}
          />
        ))}
        <div className="totalPrice">
          <CurrencyFormat
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            renderText={(value) => (
              <>
                <p>
                  Subtotal ({basket.length} items): <strong>{value}</strong>
                </p>
              </>
            )}
          />
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
