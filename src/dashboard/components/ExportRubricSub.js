import React from "react";
import { saveAs } from 'file-saver';
import XLSX from "sheetjs-style";


const ExportRubricSub = ({ data, fileName }) => {
  const exportToExcel = () => {
    const workbook = XLSX.utils.book_new();

    // Iterate over each category
    for (const category in data) {
      if (data.hasOwnProperty(category)) {
        const subcategoryData = data[category];
        const worksheet = XLSX.utils.aoa_to_sheet([
          ["Criteria",4,3,2,1], // Add category as the header row
          ...Object.entries(subcategoryData).map(([criteria, values]) => [criteria, ...values])
        ]);

        // Add worksheet to the workbook with the category name
        XLSX.utils.book_append_sheet(workbook, worksheet, category);
      }
    }

    // Save the workbook as an Excel file
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], {type: 'application/octet-stream'});
    saveAs(blob, `${fileName}.xlsx`);
  };

  return (
    <button onClick={exportToExcel}>Export to Excel</button>
  );
};

export default ExportRubricSub;
