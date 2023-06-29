// Looks just like the new item form.
// has search bar to search for items in the database.
import "./LineItemForm.css";
export default function LineItemForm() {
  function handleAddToOrder() {
    alert("Add to order");
  }

  return (
    <div className="add-line-item">
      <label className="add-item-label">
        Item Name:
        <input type="text" className="input" />
      </label>
      <label className="add-item-label">
        Quantity:
        <input type="number" className="input" />
      </label>
      <label className="add-item-label">
        Unit:
        <input type="string" className="input" />
      </label>
      <label className="add-item-label">
        Cost:
        <input type="number" className="input" />
      </label>
      <label className="add-item-label">
        Price:
        <input type="number" className="add-item-label" />
      </label>
      <button className="add-item-button" onClick={handleAddToOrder}>
        +
      </button>
    </div>
  );
}
