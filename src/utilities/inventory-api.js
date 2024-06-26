import sendRequest from "./send-request";
const BASE_URL = "/api/inventory";
// const BASE_URL = "https://ionexus-api.onrender.com/api/inventory";

// Make a DB call to get all inventory items
export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function addNewItem(newItemData) {
  return sendRequest(BASE_URL, "POST", newItemData);
}

export async function getCategoryIdByName(categoryName) {
  return sendRequest(`${BASE_URL}/category`, "POST", {
    categoryName: categoryName,
  });
}

export async function getAllCategories() {
  return sendRequest(`${BASE_URL}/category`);
}
