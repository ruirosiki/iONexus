import React from "react";
import { Link } from "react-router-dom";
import "./CustomerItem.css";

export default function CustomerItem({ customer }) {
  return (
    <Link>
      <div className="customer-card">
        <h1>{customer.name}</h1>
        <h3>{customer.contactPerson}</h3>
        <h3>{customer.email}</h3>
        <h3>{customer.phoneNumber}</h3>
        <h3>
          Eventually show a list of orders Or link this to a single customer
          view that shows orders
        </h3>
      </div>
    </Link>
  );
}
