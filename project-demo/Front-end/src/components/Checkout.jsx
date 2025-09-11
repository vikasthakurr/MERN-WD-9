import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <p>{totalAmount}</p>
      <button>Proceed to Pay</button>
    </div>
  );
};

export default Checkout;
