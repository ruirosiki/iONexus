import sendRequest from "./send-request";
const BASE_URL = "/api/customers";
// const BASE_URL = "https://ionexus-api.onrender.com/api/customers";

export async function getAll() {
  return sendRequest(BASE_URL);
}
export async function addNewCustomer(newCustomerData) {
  return sendRequest(BASE_URL, "POST", newCustomerData);
}
export async function editCustomer(editedCustomerData) {
  return sendRequest(
    `${BASE_URL}/${editedCustomerData._id}`,
    "PATCH",
    editedCustomerData
  );
}
export async function deleteCustomer(customerId) {
  return sendRequest(`${BASE_URL}/${customerId}`, "DELETE");
}
