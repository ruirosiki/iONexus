import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as inventoryApi from "../../utilities/inventory-api";
import CategorySearch from "../CategorySearch/CategorySearch";

export default function NewItemForm({ categories, selectedCategory }) {
  const [itemForm, setItemForm] = useState({
    name: "",
    category: "",
    qty: "",
    unit: "",
    cost: "",
    price: "",
  });
  const navigate = useNavigate();

  function updateForm(value) {
    return setItemForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // convert category string to an ObjectId;
    const category = await inventoryApi.getCategoryIdByName(itemForm.category);
    const categoryId = category ? category._id : null;
    const newItem = { ...itemForm, category: categoryId };
    await inventoryApi.addNewItem(newItem);
    // Reset form fields
    setItemForm({
      name: "",
      category: "",
      qty: "",
      unit: "",
      cost: "",
      price: "",
    });
    navigate("/inventory");
  }

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <label className="label">
        Category:
        <select
          value={itemForm.category}
          onChange={(e) => updateForm({ category: e.target.value })}
        >
          <option value="">Select a Category</option>
          {categories.map((category) => (
            <option key={category._id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label className="label">
        Item Name:
        <input
          type="text"
          className="input"
          value={itemForm.name}
          onChange={(e) => updateForm({ name: e.target.value })}
        />
      </label>
      <br />
      <label className="label">
        Quantity:
        <input
          type="number"
          className="input"
          value={itemForm.qty}
          onChange={(e) => updateForm({ qty: e.target.value })}
        />
      </label>
      <br />
      <label className="label">
        Unit:
        <input
          type="string"
          className="input"
          value={itemForm.unit}
          onChange={(e) => updateForm({ unit: e.target.value })}
        />
      </label>
      <br />
      <label className="label">
        Cost:
        <input
          type="number"
          className="input"
          value={itemForm.cost}
          onChange={(e) => updateForm({ cost: e.target.value })}
        />
      </label>
      <br />
      <label className="label">
        Price:
        <input
          type="number"
          className="input"
          value={itemForm.price}
          onChange={(e) => updateForm({ price: e.target.value })}
        />
      </label>
      <br />
      <button className="button" type="submit">
        Add Item
      </button>
    </form>
  );
}
