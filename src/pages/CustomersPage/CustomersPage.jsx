import { useState, useEffect } from "react";
import * as customersApi from "../../utilities/customers-api";
import ExcelExport from "../../components/ExcelExport/ExcelExport";
import CustomerList from "../../components/CustomerList/CustomerList";

export default function CustomersPage({ customers, setCustomers }) {
  return (
    <div>
      <CustomerList customers={customers} setCustomers={setCustomers} />
      <ExcelExport excelData={customers} fileName={"Customer List"} />
    </div>
  );
}
