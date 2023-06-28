// Provide a drop down menu for category searching

export default function CategorySearch({
  inventory,
  selectedCategory,
  handleCategoryChange,
  categories,
}) {
  console.log({ categories });
  return (
    <select value={selectedCategory || ""} onChange={handleCategoryChange}>
      <option value="">Show All Inventory</option>
      {categories.map((category) => (
        <option key={category._id} value={category._id}>
          {category.name}
        </option>
      ))}
    </select>
  );
}
