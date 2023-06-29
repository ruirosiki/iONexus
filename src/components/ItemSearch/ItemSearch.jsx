export default function ItemSearch({ inventory, selectedItem, onSelect }) {
  function handleSelect(e) {
    const selectedValue = e.target.value;
    const selectedItem = inventory.find((item) => item.name === selectedValue);
    onSelect(selectedItem);
  }

  console.log({ inventory });
  return (
    <select
      value={selectedItem ? selectedItem.name : ""}
      onChange={handleSelect}
    >
      <option value="">Select an Item</option>
      {inventory.map((item) => (
        <option key={item._id} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  );
}
