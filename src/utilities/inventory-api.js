import sendRequest from "./send-request";
const BASE_URL = "/api/inventory";

// Make a DB call to get all inventory items
export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function addNewItem(newItemData) {
  return sendRequest(BASE_URL, "POST", newItemData);
}
