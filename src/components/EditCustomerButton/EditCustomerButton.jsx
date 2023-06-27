import React from "react";

export default function EditCustomer({ customer, toggleEditMode }) {
  return <button onClick={toggleEditMode}>Edit Customer</button>;
}
