// Customer search bar
// Add line item component (form and plus button)
// Customer Order
// Place order button
import React from "react";
import CustomerSearch from "../../components/CustomerSearch/CustomerSearch";
import PlaceOrderButton from "../../components/PlaceOrderButton/PlaceOrderButton";
import CustomerOrder from "../../components/CustomerOrder/CustomerOrder";
import AddLineItem from "../../components/AddLineItem/AddLineItem";

export default function NewOrderPage({ customers }) {
  return (
    <div>
      <h1>New Order Page</h1>
      <CustomerSearch customers={customers} />
      <AddLineItem />
      <CustomerOrder />
      <PlaceOrderButton />
    </div>
  );
}
