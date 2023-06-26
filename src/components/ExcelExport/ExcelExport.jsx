import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";

export default function ExcelExport({ excelData, fileName }) {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  async function exportToExcel() {
    //convert data to excel worksheet
    const ws = XLSX.utils.json_to_sheet(excelData);
    // create an Excel workbook object and assign it the worksheet defined above
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    // converts workbook into an excel file buffer
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    // converts buffer into a Blob(Binary large object) object representing raw data.
    //
    const data = new Blob([excelBuffer], { type: fileType });
    // Save file
    await FileSaver.saveAs(data, fileName + fileExtension);
  }

  return (
    <div>
      <button onClick={(e) => exportToExcel(fileName)}>Export Excel</button>
    </div>
  );
}
