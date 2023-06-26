import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import CustomerOrdersPage from "../CustomerOrdersPage/CustomerOrdersPage";
import InventoryPage from "../InventoryPage/InventoryPage";
import NewInventoryItemPage from "../NewInventoryItemPage/NewInventoryItemPage";
import NavBar from "../../components/NavBar/NavBar";
import NewCustomerPage from "../NewCustomerPage/NewCustomer";
import CustomersPage from "../CustomersPage/CustomersPage";
import Footer from "../../components/Footer/Footer";
import { getUser } from "../../utilities/users-service";

export default function App() {
  // user defined in app so we can pass to any component through the whole app
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/orders" element={<CustomerOrdersPage />} />
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/inventory/new" element={<NewInventoryItemPage />} />
            <Route path="/customers/new" element={<NewCustomerPage />} />
            <Route path="/customers" element={<CustomersPage />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
