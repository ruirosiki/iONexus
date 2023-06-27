import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewCustomerForm() {
  const [customerForm, setCustomerForm] = useState({
    name: "",
    contactPerson: "",
    email: "",
    phoneNumber: "",
  });
  const navigate = useNavigate();

  function updateForm(value) {
    return setCustomerForm((prev) => {
      return { ...prev, ...value };
    });
  }

  return (
    <form className="formContainer">
      <label className="label">
        Name:
        <input
          type="text"
          className="input"
          value={customerForm.name}
          onChange={(e) => updateForm({ name: e.target.value })}
        />
      </label>
      <br />
      <label className="label">
        Contact Person:
        <input
          type="text"
          className="input"
          value={customerForm.contactPerson}
          onChange={(e) => updateForm({ contactPerson: e.target.value })}
        />
      </label>
      <br />
      <label className="label">
        Email:
        <input
          type="email"
          className="input"
          value={customerForm.email}
          onChange={(e) => updateForm({ email: e.target.value })}
        />
      </label>
      <br />
      <label className="label">
        Phone Number:
        <input
          type="tel"
          className="input"
          value={customerForm.phoneNumber}
          onChange={(e) => updateForm({ phoneNumber: e.target.value })}
        />
      </label>
      <br />
      <button className="button" type="submit">
        Add Customer
      </button>
    </form>
  );
}
