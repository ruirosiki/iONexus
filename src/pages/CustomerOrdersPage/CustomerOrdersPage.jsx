import React from "react";
import { checkToken } from "../../utilities/users-service";
import CustomerSearch from "../../components/CustomerSearch/CustomerSearch";

export default function OrderHistoryPage({ customers }) {
  async function handleCheckToken() {
    let expDate = await checkToken();
    console.log(expDate);
  }
  return (
    <div>
      <h1>Order History Page</h1>
      <CustomerSearch customers={customers} />
    </div>
  );
}
