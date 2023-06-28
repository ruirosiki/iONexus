import { useState, useEffect } from "react";
import CustomerItem from "../CustomerItem/CustomerItem";
import "./CustomerList.css";

export default function CustomerList({
  customers,
  setCustomers,
  handleDelete,
}) {
  const singleCustomer = customers.map((customer) => (
    <CustomerItem
      key={customer.id}
      customer={customer}
      customers={customers}
      setCustomers={setCustomers}
      handleDelete={handleDelete}
    />
  ));

  return <div className="all-customer-cards">{singleCustomer}</div>;
}
