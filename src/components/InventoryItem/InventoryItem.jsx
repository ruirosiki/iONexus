import React from "react";
import "./InventoryItem.css";
export default function Item({ inventory }) {
  return (
    <tr>
      <td>{inventory.name}</td>
      <td>{inventory.qty}</td>
      <td>{inventory.unit}</td>
      <td>${inventory.cost.toFixed(2)}</td>
      <td>${inventory.price.toFixed(2)}</td>
    </tr>
  );
}
