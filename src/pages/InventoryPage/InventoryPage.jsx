import { useState, useEffect } from "react";
import InventoryList from "../../components/InventoryList/InventoryList";
import * as inventoryApi from "../../utilities/inventory-api";

export default function InventoryPage() {
  // Create a state to track the inventory state
  const [inventory, setInventory] = useState([]);
  useEffect(function () {
    async function getInventory() {
      const inventory = await inventoryApi.getAll();
      console.log(inventory);
      setInventory(inventory);
    }
    getInventory();
  }, []);

  return (
    <div>
      <h1>InventoryPage</h1>
      <InventoryList inventory={inventory} />
    </div>
  );
}
