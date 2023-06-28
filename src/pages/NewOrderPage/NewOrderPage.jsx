// Customer search bar
// Add line item
// Customer Order
import React from "react";
import CustomerSearch from "../../components/CustomerSearch/CustomerSearch";

export default function NewOrderPage({ customers }) {
  return (
    <div>
      <h1>New Order Page</h1>
      <CustomerSearch customers={customers} />
    </div>
    //<AddLineItem />
    //<CustomerOrder />
  );
}
