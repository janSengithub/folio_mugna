import * as XLSX from "xlsx";

export const loadImages = async () => {
  const response = await fetch("/images.xlsx"); // Ensure the file is inside public/
  const arrayBuffer = await response.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer, { type: "array" });
  const sheetName = workbook.SheetNames[0];
  const sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
  return sheet;
};
