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

      <InventoryList
        inventory={inventory}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <ExcelExport excelData={inventory} fileName={"Inventory"} />
    </div>
  );
}
