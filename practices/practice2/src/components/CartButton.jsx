import React from "react";
import cart from "../assets/shopping-cart.png";

const CartButton = ({ width }) => {
  return (
    <button>
      <img src={cart} alt="쇼핑카트" className={width} />
    </button>
  );
};

export default CartButton;
