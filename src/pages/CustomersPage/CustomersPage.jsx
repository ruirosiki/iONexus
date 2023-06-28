import { useState, useEffect } from "react";
import * as customersApi from "../../utilities/customers-api";
import ExcelExport from "../../components/ExcelExport/ExcelExport";
import CustomerList from "../../components/CustomerList/CustomerList";

export default function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  useEffect(function () {
    async function getCustomers() {
      const customers = await customersApi.getAll();
      setCustomers(customers);
    }
    getCustomers();
  }, []);

  return (
    <div>
      <CustomerList customers={customers} setCustomers={setCustomers} />
      <ExcelExport excelData={customers} fileName={"Customer List"} />
    </div>
  );
}
