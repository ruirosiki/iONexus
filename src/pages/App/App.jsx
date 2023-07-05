import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import CustomerOrdersPage from "../CustomerOrdersPage/CustomerOrdersPage";
import InventoryPage from "../InventoryPage/InventoryPage";
import NewInventoryItemPage from "../NewInventoryItemPage/NewInventoryItemPage";
import NavBar from "../../components/NavBar/NavBar";
import NewCustomerPage from "../NewCustomerPage/NewCustomerPage";
import CustomersPage from "../CustomersPage/CustomersPage";
import Footer from "../../components/Footer/Footer";
import * as customersApi from "../../utilities/customers-api";
import * as inventoryApi from "../../utilities/inventory-api";
import GetInventory from "../../components/GetInventory/GetInventory";
import { getUser } from "../../utilities/users-service";

export default function App() {
  // *********** STATES **********
  const [user, setUser] = useState(getUser());
  const [customers, setCustomers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [inventory, setInventory] = useState([]);

  // *********** FUNCTIONS **********
  useEffect(function () {
    async function getInventory() {
      const inventoryData = await inventoryApi.getAll();
      setInventory(inventoryData);
    }
    getInventory();
  }, []);

  function handleCategoryChange(e) {
    const categoryId = e.target.value;
    setSelectedCategory(categoryId);
  }
  useEffect(function () {
    async function getCustomers() {
      const customers = await customersApi.getAll();
      setCustomers(customers);
    }
    getCustomers();

    async function getCategories() {
      const categoriesData = await inventoryApi.getAllCategories();
      setCategories(categoriesData);
    }
    getCategories();
  }, []);

  return (
    <main className="App">
      {user ? (
        <div className="nav-and-content">
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route
              path="/orders"
              element={<CustomerOrdersPage customers={customers} />}
            />
            <Route
              path="/orders/new"
              element={
                <NewOrderPage customers={customers} inventory={inventory} />
              }
            />
            {/* <Route path="/inventory" element={<GetInventory />} /> */}
            <Route
              path="/inventory"
              element={
                <InventoryPage
                  categories={categories}
                  selectedCategory={selectedCategory}
                  handleCategoryChange={handleCategoryChange}
                  inventory={inventory}
                />
              }
            />
            <Route
              path="/inventory/new"
              element={
                <NewInventoryItemPage
                  categories={categories}
                  selectedCategory={selectedCategory}
                  handleCategoryChange={handleCategoryChange}
                />
              }
            />
            <Route
              path="/customers/new"
              element={<NewCustomerPage user={user} />}
            />
            <Route
              path="/customers"
              element={
                <CustomersPage
                  customers={customers}
                  setCustomers={setCustomers}
                />
              }
            />
          </Routes>
        </div>
      ) : (
        <>
          <AuthPage setUser={setUser} />
        </>
      )}
      <Footer />
    </main>
  );
}
