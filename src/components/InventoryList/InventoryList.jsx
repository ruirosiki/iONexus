import React from "react";
import Item from "../InventoryItem/InventoryItem";
import "./InventoryList.css";
import { Link } from "react-router-dom";

export default function InventoryList({
  inventory,
  selectedCategory,
  handleCategoryChange,
}) {
  const filteredInventory = selectedCategory
    ? inventory.filter((item) => item.category === selectedCategory)
    : inventory;

  // const inventoryItems = inventory.map((item) => (
  // <Item key={item._id} inventory={item} />
  const inventoryItems = filteredInventory.map((item) => (
    <Item key={item._id} inventory={item} />
  ));

  return (
    <div>
      <select value={selectedCategory || ""} onChange={handleCategoryChange}>
        <option value="">All</option>
        <option value="649b607ff5fb7e53f5ffcde7">Mushrooms</option>
        <option value="649b607ff5fb7e53f5ffcde8">Produce</option>
        <option value="649b607ff5fb7e53f5ffcde9">Seafood</option>
        <option value="649b607ff5fb7e53f5ffcdea">Meats</option>
        <option value="649b607ff5fb7e53f5ffcdeb">Frozen</option>
        <option value="649b607ff5fb7e53f5ffcdec">Dry Goods</option>
      </select>
      <Link to="/inventory/new">
        <button>New Item</button>
      </Link>
      <table>
        <thead>
          <th>Product Name</th>
          <th>On Hand</th>
          <th>Unit</th>
          <th>Cost</th>
          <th>Price</th>
        </thead>
        <tbody>{inventoryItems}</tbody>
      </table>
    </div>
  );
}
