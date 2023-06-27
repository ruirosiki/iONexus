import NewCustomerForm from "../../components/NewCustomerForm/NewCustomerForm";
import "./NewCustomerPage.css";

export default function NewCustomer() {
  return (
    <div className="new-customer">
      <h2>Add New Customer</h2>
      <NewCustomerForm />
    </div>
  );
}
