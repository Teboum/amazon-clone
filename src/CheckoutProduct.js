import React, { forwardRef } from "react";

import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

export default forwardRef(function CheckoutProduct(
  { id, image, title, price, rating, hiddeButton },
  ref
) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="CheckoutProduct" ref={ref}>
      <img className="CheckoutProduct__image" src={image} alt="" />
      <div className="CheckoutProduct__info">
        <p className="checkouProduct__title">{title}</p>
        <p className="CheckoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="CheckoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
        {!hiddeButton && (
          <button onClick={removeFromBasket}>Remove from the basket</button>
        )}
      </div>
    </div>
  );
});
