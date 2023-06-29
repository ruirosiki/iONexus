// Looks just like the new item form.
// has search bar to search for items in the database.
import { useEffect, useState } from "react";
import "./LineItemForm.css";
import ItemSearch from "../ItemSearch/ItemSearch";

export default function LineItemForm({ inventory }) {
  const [selectedItem, setSelectedItem] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [quantityError, setQuantityError] = useState(false);

  useEffect(() => {
    setQuantityError(false);
  }, [selectedItem]);

  function handleSelectedItem(item) {
    setSelectedItem(item);
    setPrice(item.price);
  }
  function handlePriceChange(e) {
    setPrice(e.target.value);
  }

  function handleQuantityChange(e) {
    setQuantity(parseInt(e.target.value));
    setQuantityError(false);
  }

  function handleAddToOrder() {
    if (quantity > selectedItem.qty) {
      setQuantityError(true);
      return;
    }
    alert("Add to order");
  }

  return (
    <div className="line-item-container">
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
          <input
            type="number"
            className="input"
            value={quantity}
            onChange={handleQuantityChange}
            style={{ width: 75 }}
          />
        </label>
        <label className="add-item-label">
          Unit:
          <input
            type="string"
            className="input"
            value={selectedItem.unit}
            style={{ width: 75 }}
            readOnly
          />
        </label>
        <label className="add-item-label">
          Cost:$
          <input
            type="number"
            className="input"
            value={selectedItem.cost}
            style={{ width: 75 }}
            readOnly
          />
        </label>
        <label className="add-item-label">
          Price: $
          <input
            type="number"
            className="add-item-label"
            value={price}
            onChange={handlePriceChange}
            style={{ width: 75 }}
          />
        </label>
        <button className="add-item-button" onClick={handleAddToOrder}>
          +
        </button>
      </div>
      <div>
        {quantityError && (
          <span className="error-message">
            QUANTITY EXCEEDS AVAILABLE. Available quantity: {""}{" "}
            {selectedItem.qty} {selectedItem.unit}
          </span>
        )}
      </div>
    </div>
  );
}
