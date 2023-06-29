// Looks just like the new item form.
// has search bar to search for items in the database.
import { useState } from "react";
import "./LineItemForm.css";
import ItemSearch from "../ItemSearch/ItemSearch";

export default function LineItemForm({ inventory }) {
  const [selectedItem, setSelectedItem] = useState("");
  const [price, setPrice] = useState("");

  function handleSelectedItem(item) {
    setSelectedItem(item);
    setPrice(item.price);
  }
  function handlePriceChange(e) {
    setPrice(e.target.value);
  }
  function handleAddToOrder() {
    alert("Add to order");
  }

  return (
    <div className="add-line-item">
      <label className="add-item-label">
        Item Name:
        <ItemSearch
          inventory={inventory}
          selectedItem={selectedItem}
          onSelect={handleSelectedItem}
        />
      </label>
      <label className="add-item-label">
        Quantity:
        <input type="number" className="input" />
      </label>
      <label className="add-item-label">
        Unit:
        <input
          type="string"
          className="input"
          value={selectedItem.unit}
          readOnly
        />
      </label>
      <label className="add-item-label">
        Cost:
        <input
          type="number"
          className="input"
          value={selectedItem.cost}
          readOnly
        />
      </label>
      <label className="add-item-label">
        Price:
        <input
          type="number"
          className="add-item-label"
          value={price}
          onChange={handlePriceChange}
        />
      </label>
      <button className="add-item-button" onClick={handleAddToOrder}>
        +
      </button>
    </div>
  );
}
