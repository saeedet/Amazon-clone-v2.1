import React from "react";
import { useStateValue } from "../data/StateProvider";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  const addToBasketHandler = () => {
    //dispatch the item to data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__infoTitle">{title}</p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <span>In stock.</span>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasketHandler}>Add to Cart</button>
    </div>
  );
}

export default Product;
