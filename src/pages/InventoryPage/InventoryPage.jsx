import { useState, useEffect } from "react";
import InventoryList from "../../components/InventoryList/InventoryList";
import * as inventoryApi from "../../utilities/inventory-api";
import ExcelExport from "../../components/ExcelExport/ExcelExport";

export default function InventoryPage() {
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
      <InventoryList inventory={inventory} />
      <ExcelExport excelData={inventory} fileName={"Inventory"} />
    </div>
  );
}
