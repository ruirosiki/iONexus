import { useState } from "react";
import { Link } from "react-router-dom";
import "./CustomerItem.css";
import EditButton from "../EditCustomerButton/EditCustomerButton";
import EditCustomerForm from "../EditCustomerForm/EditCustomerForm";
import * as customersApi from "../../utilities/customers-api";

export default function CustomerItem({ customer, setCustomers }) {
  // STATES
  const [customerCard, setCustomerCard] = useState({
    name: customer.name,
    contactPerson: customer.contactPerson,
    email: customer.email,
    phoneNumber: customer.phoneNumber,
  });
  const [editMode, setEditMode] = useState(false);
  const [editCustomerForm, setEditCustomerForm] = useState({
    name: customer.name,
    contactPerson: customer.contactPerson,
    email: customer.email,
    phoneNumber: customer.phoneNumber,
  });

  //FUNCTIONS
  function toggleEditMode() {
    setEditMode(!editMode);
  }

  async function handleDelete() {
    const customerId = customer._id;
    await customersApi.deleteCustomer(customerId);
    const customers = await customersApi.getAll();
    setCustomers(customers);
  }

  async function handleUpdateCustomer(e) {
    e.preventDefault();
    const editedCustomer = {
      _id: customer._id,
      name: editCustomerForm.name,
      contactPerson: editCustomerForm.contactPerson,
      email: editCustomerForm.email,
      phoneNumber: editCustomerForm.phoneNumber,
    };
    const ec = await customersApi.editCustomer(editedCustomer);
    setEditCustomerForm(ec);
    setCustomerCard(ec);
    toggleEditMode();
  }

  //RETURN STATEMENT
  return (
    <Link className="customer-link">
      <div className="customer-card">
        {editMode ? (
          <EditCustomerForm
            customer={customer}
            toggleEditMode={toggleEditMode}
            handleUpdateCustomer={handleUpdateCustomer}
            setEditCustomerForm={setEditCustomerForm}
            editCustomerForm={editCustomerForm}
          />
        ) : (
          <>
            <h1>{customerCard.name}</h1>
            <h3>{customerCard.contactPerson}</h3>
            <h3>{customerCard.email}</h3>
            <h3>{customerCard.phoneNumber}</h3>
            <EditButton toggleEditMode={toggleEditMode} customer={customer} />
            <button onClick={handleDelete}>Delete Customer</button>
          </>
        )}
      </div>
    </Link>
  );
}
