import React, { forwardRef } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

export default forwardRef(function Product(
  { id, title, image, price, rating },
  ref
) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = (e) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price,
        rating: rating,
      },
    });

    console.log(document.querySelector(".original__image"));
    let imgClone = e.target.previousSibling.firstChild.cloneNode();
    imgClone.classList.add("zoom");
    console.log(imgClone);
    let appended = e.target.parentNode.insertAdjacentElement(
      "afterend",
      imgClone
    );
    setTimeout(() => {
      appended.remove();
      appended = null;
    }, 2000);
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="p__title">{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <div className="image__clone">
        <img className="original__image" src={image} alt="" />
      </div>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
});
