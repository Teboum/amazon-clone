import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  let userName =
    (user ? user.email.substring(0, user.email.indexOf("@")) : "GUEST")
      .charAt(0)
      .toUpperCase() +
    (user
      ? user.email.substring(0, user.email.indexOf("@"))
      : "GUEST"
    ).substring(1);
  return (
    <div className="checkout">
      <div className="cheout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />

        <div className="basket__product">
          <h3>hello, {userName}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          <FlipMove
            staggerDelayBy={150}
            appearAnimation="elevator"
            leaveAnimation="accordionHorizontal"
          >
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </FlipMove>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
