import { useState, useEffect } from "react";
import InventoryList from "../../components/InventoryList/InventoryList";
import * as inventoryApi from "../../utilities/inventory-api";
import ExcelExport from "../../components/ExcelExport/ExcelExport";
import CategorySearch from "../../components/CategorySearch/CategorySearch";

export default function InventoryPage({
  categories,
  selectedCategory,
  handleCategoryChange,
}) {
  // Create a state to track the inventory state
  const [inventory, setInventory] = useState([]);

  useEffect(function () {
    async function getInventory() {
      const inventoryData = await inventoryApi.getAll();
      setInventory(inventoryData);
    }
    getInventory();
  }, []);

  return (
    <div>
      <h1>Current Inventory</h1>
      <InventoryList
        inventory={inventory}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        categories={categories}
      />
      <ExcelExport excelData={inventory} fileName={"Inventory"} />
    </div>
  );
}
