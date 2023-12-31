// Customer search bar
// Add line item component (form and plus button)
// Customer Order
// Place order button
import React from "react";
import CustomerSearch from "../../components/CustomerSearch/CustomerSearch";
import PlaceOrderButton from "../../components/PlaceOrderButton/PlaceOrderButton";
import CustomerOrder from "../../components/CustomerOrder/CustomerOrder";
import AddLineItem from "../../components/AddLineItem/AddLineItem";

export default function NewOrderPage({ customers, inventory }) {
  return (
    <div>
      <h1>Place a New Customer Order</h1>
      <CustomerSearch customers={customers} />
      <AddLineItem inventory={inventory} />
      <CustomerOrder />
      <PlaceOrderButton />
    </div>
  );
}
