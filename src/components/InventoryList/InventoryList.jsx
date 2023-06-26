import React from "react";
import Item from "../InventoryItem/InventoryItem";
import "./InventoryList.css";
import { Link } from "react-router-dom";

export default function InventoryList({ inventory }) {
  const inventoryItems = inventory.map((item) => (
    <Item key={item._id} inventory={item} />
  ));
  return (
    <div>
      <h1>Current Inventory</h1>
      <Link to="/inventory/new">
        <button>New Item</button>
      </Link>
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
