// import React from "react";
// import InventoryPage from "../../pages/InventoryPage/InventoryPage";
// import * as inventoryApi from "../../utilities/inventory-api";

// export default function GetInventory() {
//   const [inventory, setInventory] = useState([]);
//   useEffect(function () {
//     async function getInventory() {
//       const inventoryData = await inventoryApi.getAll();
//       setInventory(inventoryData);
//     }
//     getInventory();
//   }, []);
//   console.log(inventory);
//   return <InventoryPage inventory={inventory} />;
// }
