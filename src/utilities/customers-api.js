import sendRequest from "./send-request";
const BASE_URL = "/api/customers";

export async function getAll() {
  return sendRequest(BASE_URL);
}
