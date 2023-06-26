import React from "react";
import Item from "../InventoryItem/InventoryItem";
import "./InventoryList.css";
export default function InventoryList({ inventory }) {
  const inventoryItems = inventory.map((item) => (
    <Item key={item._id} inventory={item} />
  ));
  return (
    <div>
      <h1>InventoryList</h1>
      <table>
        <tr>
          <th>Product Name</th>
          <th>On Hand</th>
          <th>Unit</th>
          <th>Cost</th>
          <th>Price</th>
        </tr>
        <tbody>{inventoryItems}</tbody>
      </table>
    </div>
  );
}
