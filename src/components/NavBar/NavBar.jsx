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
      <Link to="/inventory/new">
        <button className="nav-button">New Item</button>
      </Link>
      <Link to="/customers/new">
        <button className="nav-button">New Customer</button>
      </Link>
      <Link to="/orders/new">
        <button className="nav-button">New Customer Order</button>
      </Link>
      <Link to="/inventory">
        <button className="nav-button">View Inventory</button>
      </Link>
      <Link to="/customers">
        <button className="nav-button">View Customers</button>
      </Link>
      <Link to="/orders">
        <button className="nav-button">View Customer Orders</button>
      </Link>
      <Link to="/invoice">
        <button className="nav-button">Invoice</button>
      </Link>
      <Link to="/reports">
        <button className="nav-button">Reports</button>
      </Link>
      <Link to="" onClick={handleLogOut}>
        <button className="nav-button">Log Out</button>
      </Link>
    </nav>
  );
}
