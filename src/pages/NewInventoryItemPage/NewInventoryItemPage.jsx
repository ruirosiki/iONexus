import React from "react";
import NewItemForm from "../../components/NewItemForm/NewItemForm";

export default function NewInventoryItemPage({
  categories,
  selectedCategory,
  handleCategoryChange,
}) {
  return (
    <div>
      <h2>Add New Inventory Item</h2>
      <NewItemForm
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
    </div>
  );
}
