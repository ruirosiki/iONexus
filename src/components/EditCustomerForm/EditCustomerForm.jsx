import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as customersApi from "../../utilities/customers-api";
export default function EditCustomerForm({
  customer,
  toggleEditMode,
  handleUpdateCustomer,
  setEditCustomerForm,
  editCustomerForm,
}) {
  // const [editCustomerForm, setEditCustomerForm] = useState({
  //   name: customer.name,
  //   contactPerson: customer.contactPerson,
  //   email: customer.email,
  //   phoneNumber: customer.phoneNumber,
  // });

  const navigate = useNavigate();

  function updateForm(value) {
    return setEditCustomerForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   const editedCustomer = {
  //     _id: customer._id,
  //     name: editCustomerForm.name,
  //     contactPerson: editCustomerForm.contactPerson,
  //     email: editCustomerForm.email,
  //     phoneNumber: editCustomerForm.phoneNumber,
  //   };
  //   await customersApi.editCustomer(editedCustomer);
  //   toggleEditMode();
  // }

  return (
    <form className="edit-customer">
      <input
        type="text"
        className="input"
        value={editCustomerForm.name}
        onChange={(e) => updateForm({ name: e.target.value })}
      />
      <input
        type="text"
        className="input"
        value={editCustomerForm.contactPerson}
        onChange={(e) => updateForm({ contactPerson: e.target.value })}
      />
      <input
        type="email"
        className="input"
        value={editCustomerForm.email}
        onChange={(e) => updateForm({ email: e.target.value })}
      />
      <input
        type="tel"
        className="input"
        value={editCustomerForm.phoneNumber}
        onChange={(e) => updateForm({ phoneNumber: e.target.value })}
      />
      <button type="submit" onClick={handleUpdateCustomer}>
        Save
      </button>
      <button type="submit" onClick={toggleEditMode}>
        Cancel
      </button>
    </form>
  );
}
