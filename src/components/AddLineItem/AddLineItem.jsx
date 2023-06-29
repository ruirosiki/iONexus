// Form to add item
// Plus button - adds line item to order
import LineItemForm from "../LineItemForm/LineItemForm";
import React from "react";

export default function AddLineItem({ inventory }) {
  return (
    <div>
      <h1>AddLineItem</h1>
      <LineItemForm inventory={inventory} />
    </div>
    //<AddButton />
  );
}
