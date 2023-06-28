import { useMemo } from "react";
import Item from "../InventoryItem/InventoryItem";
import "./InventoryList.css";
import { Link } from "react-router-dom";

export default function InventoryList({
  inventory,
  selectedCategory,
  handleCategoryChange,
}) {
  const filteredInventory = useMemo(() => {
    if (selectedCategory) {
      return inventory.filter((item) => item.category === selectedCategory);
    }
    return inventory;
  }, [inventory, selectedCategory]);

  const inventoryItems = inventory.map((item) => (
    <Item key={item._id} inventory={item} />
  ));

  const filteredInventoryItems = filteredInventory.map((item) => (
    <Item key={item._id} inventory={item} />
  ));

  return (
    <div>
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
        <tbody>
          {selectedCategory ? filteredInventoryItems : inventoryItems}
        </tbody>
      </table>
    </div>
  );
}
