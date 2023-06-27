import React from "react";
import { checkToken } from "../../utilities/users-service";

export default function OrderHistoryPage() {
  async function handleCheckToken() {
    let expDate = await checkToken();
    console.log(expDate);
  }
  return (
    <>
      <h1>Order History Page</h1>
    </>
  );
}
