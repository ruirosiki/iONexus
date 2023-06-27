import NewCustomerForm from "../../components/NewCustomerForm/NewCustomerForm";
import "./NewCustomerPage.css";

export default function NewCustomer({ user }) {
  return (
    <div className="new-customer">
      <h2>Add New Customer</h2>
      <NewCustomerForm user={user} />
    </div>
  );
}
