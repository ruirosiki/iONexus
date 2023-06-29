import { useEffect, useState } from "react";
import Item from "../InventoryItem/InventoryItem";
import "./InventoryList.css";
import { Link } from "react-router-dom";
import CategorySearch from "../../components/CategorySearch/CategorySearch";
import NewItemButton from "../NewItemButton/NewItemButton";
export default function InventoryList({
  inventory,
  selectedCategory,
  handleCategoryChange,
  categories,
}) {
  // const [filteredInventory, setFilteredInventory] = useState([]);

  // useEffect(() => {
  //   setFilteredInventory(
  //     selectedCategory
  //       ? inventory.filter((item) => item.category === selectedCategory)
  //       : inventory
  //   );
  // }, [selectedCategory, inventory]);

  // const inventoryItems = filteredInventory.map((item) => (
  //   <Item key={item._id} inventory={item} />
  // ));

  // useEffect(() => {
  //   setFilteredInventory(inventory);
  // }, []);

  let filteredInventory = inventory;

  if (selectedCategory) {
    filteredInventory = inventory.filter(
      (item) => item.category === selectedCategory
    );
  }

  const inventoryItems = filteredInventory.map((item) => (
    <Item key={item._id} inventory={item} />
  ));

  return (
    <div>
      <CategorySearch
        inventory={inventoryItems}
        handleCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
        categories={categories}
      />
      <NewItemButton categories={categories} />
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
