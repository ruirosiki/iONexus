import React from "react";

export default function CustomerSearch({ customers }) {
  console.log({ customers });
  return (
    <select>
      <option value="">Select a Customer</option>
      {customers.map((customer) => (
        <option key={customer._id} value={customer._id}>
          {customer.name}
        </option>
      ))}
    </select>
  );
}
