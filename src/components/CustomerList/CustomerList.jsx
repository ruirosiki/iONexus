import React from "react";
import CustomerItem from "../CustomerItem/CustomerItem";
import "./CustomerList.css";
export default function CustomerList({ customers }) {
  const singleCustomer = customers.map((customer) => (
    <CustomerItem key={customer.id} customer={customer} />
  ));
  return <div className="all-customer-cards">{singleCustomer}</div>;
}
