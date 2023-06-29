import React from "react";

export default function PlaceOrderButton() {
  function handleSubmitOrder() {
    alert("Order Placed");
  }
  return (
    <div>
      <button type="submit" onClick={handleSubmitOrder}>
        Place Order
      </button>
    </div>
  );
}

// When button is pressed, save order to database and set isOrdered: true.
