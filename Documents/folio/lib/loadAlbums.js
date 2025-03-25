import * as XLSX from "xlsx";

export const loadAlbums = async () => {
  const response = await fetch("/albums.xlsx"); // Make sure the file is in the public folder
  const arrayBuffer = await response.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer, { type: "array" });
  const sheetName = workbook.SheetNames[0];
  const sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
  return sheet;
};
