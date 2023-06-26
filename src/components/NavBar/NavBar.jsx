import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  // console.log("This is setuser in nav", setUser);
  // function to logout
  function handleLogOut() {
    // delete the token from storage
    //wrote function in users-service
    userService.logOut();
    // set the user to null
    setUser(null);
  }
  return (
    <nav className="nav-bar">
      &nbsp;&nbsp;<span>Welcome, {user.name}</span>
      &nbsp;&nbsp;
      <Link to="/inventory/new">New Item</Link>
      <Link to="/customers/new">New Customer</Link>
      <Link to="/orders/new">New Customer Order</Link>
      <Link to="/inventory">View Inventory</Link>
      <Link to="/customers">View Customers</Link>
      <Link to="/orders">View Customer Orders</Link>
      <Link to="/invoice">Invoice</Link>
      <Link to="/reports">Reports</Link>
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
