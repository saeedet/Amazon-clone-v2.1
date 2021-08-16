import React from "react";
import { useStateValue } from "../data/StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, image, price, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasketHandler = () => {
    //remove from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__left">
        <div className="checkoutProduct__leftImageContainer">
          
        <img src={image} className="checkoutProduct__image" />
        </div>
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <span>In stock</span>
          <p className="checkoutProduct__shipping">
            Shipped from and sold by Amazon UK
          </p>
          {!hideButton && (
            <button onClick={removeFromBasketHandler}>Remove from cart</button>
          )}
        </div>
      </div>
      <div className="checkoutProduct__right">
        <strong>${price}</strong>
      </div>
    </div>
  );
}

export default CheckoutProduct;
