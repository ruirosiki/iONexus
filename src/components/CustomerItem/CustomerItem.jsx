import { useState } from "react";
import { Link } from "react-router-dom";
import "./CustomerItem.css";
import EditButton from "../EditCustomerButton/EditCustomerButton";
import EditCustomerForm from "../EditCustomerForm/EditCustomerForm";
import * as customersApi from "../../utilities/customers-api";

export default function CustomerItem({ customer }) {
  const [editMode, setEditMode] = useState(false);
  function toggleEditMode() {
    setEditMode(!editMode);
  }
  const [refresh, setRefresh] = useState(false);

  async function handleDelete() {
    const customerId = customer._id;
    console.log("This is customer Id in handle delete", customerId);
    await customersApi.deleteCustomer(customerId);
  }

  return (
    <Link className="customer-link">
      <div className="customer-card">
        {editMode ? (
          <EditCustomerForm
            customer={customer}
            toggleEditMode={toggleEditMode}
          />
        ) : (
          <>
            <h1>{customer.name}</h1>
            <h3>{customer.contactPerson}</h3>
            <h3>{customer.email}</h3>
            <h3>{customer.phoneNumber}</h3>
            <EditButton toggleEditMode={toggleEditMode} customer={customer} />
            <button onClick={handleDelete}>Delete Customer</button>
          </>
        )}
      </div>
    </Link>
  );
}
