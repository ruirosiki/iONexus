import { useState, useEffect } from "react";
import InventoryList from "../../components/InventoryList/InventoryList";
import * as inventoryApi from "../../utilities/inventory-api";
import ExcelExport from "../../components/ExcelExport/ExcelExport";

export default function InventoryPage() {
  // Create a state to track the inventory state
  const [inventory, setInventory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  useEffect(function () {
    async function getInventory() {
      const inventoryData = await inventoryApi.getAll();
      setInventory(inventoryData);
    }
    getInventory();
  }, []);

  function handleCategoryChange(e) {
    const categoryId = e.target.value;
    setSelectedCategory(categoryId);
  }

  return (
    <div>
      <h1>Current Inventory</h1>
      <select value={selectedCategory || ""} onChange={handleCategoryChange}>
        <option value="">All</option>
        <option value="649b607ff5fb7e53f5ffcde7">Mushrooms</option>
        <option value="649b607ff5fb7e53f5ffcde8">Produce</option>
        <option value="649b607ff5fb7e53f5ffcde9">Seafood</option>
        <option value="649b607ff5fb7e53f5ffcdea">Meats</option>
        <option value="649b607ff5fb7e53f5ffcdeb">Frozen</option>
        <option value="649b607ff5fb7e53f5ffcdec">Dry Goods</option>
      </select>
      <InventoryList
        inventory={inventory}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <ExcelExport excelData={inventory} fileName={"Inventory"} />
    </div>
  );
}
