import InventoryList from "../../components/InventoryList/InventoryList";
import ExcelExport from "../../components/ExcelExport/ExcelExport";
import { useEffect } from "react";

export default function InventoryPage({
  categories,
  selectedCategory,
  handleCategoryChange,
  inventory,
}) {
  useEffect(() => {}, [inventory]);
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
