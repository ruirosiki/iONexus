import React from "react";
import NewItemForm from "../../components/NewItemForm/NewItemForm";
import "./NewInventoryItemPage.css";

export default function NewInventoryItemPage({
  categories,
  selectedCategory,
  handleCategoryChange,
}) {
  return (
    <div className="new-inventory-item">
      <h2>Add New Inventory Item</h2>
      <NewItemForm
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
    </div>
  );
}
