import React from "react";
import './Table.css'
import ExportRubric from "./ExportRubric";
import { useState,useEffect } from "react";

const CriteriaTable = ({ rubricData}) => {

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Extracting data from the HTML table and updating the tableData state
    const data = Array.from(document.querySelectorAll('table tr')).map(row => (
      Array.from(row.children).map(cell => cell.textContent)
    ));

    setTableData(data);
  }, [rubricData]); // Run this effect only when rubricData changes

  // // Function to handle export to Excel
  // const handleExportToExcel = () => {
  //   // Call the export function with the table data
  //   ExportRubric(tableData, "rubrics");
  // };


  // Function to render table rows based on rubric data
  const rubricCriteria = rubricData.criteria
  console.log("This is rubric criteria",rubricCriteria,typeof(rubricCriteria))


  const renderTableRows = () => {
    if (!rubricCriteria) {
      return <div>Select Assessment, subject and classLevel...</div>;
    }

    return Object.keys(rubricCriteria).map((criteria) => (
      <tr key={criteria}>
        <td contentEditable>{criteria}</td>
        {rubricCriteria[criteria].map((value, index) => (
          <td contentEditable key={index}>{value}</td>
        ))}
      </tr>
    ));
  };

  return (
    <div>
      <p>Subject: {rubricData.subject}</p>
      <p>Class Level:{rubricData.classLevel}</p>
      <p>Assessment: {rubricData.assessment}</p>
      <p>Weightage: {rubricData.grade}%</p>

      <table>
      <thead>
        <tr>
          <th contentEditable>Criteria</th>
          <th contentEditable>4</th>
          <th contentEditable>3</th>
          <th contentEditable>2</th>
          <th contentEditable>1</th>
        </tr>
      </thead>
      <tbody>
        {renderTableRows()}
      </tbody>
    </table>
    {rubricCriteria && <ExportRubric data={tableData} fileName={rubricData.classLevel+"_"+rubricData.subject+"_"+rubricData.assessment} />}
    
    </div>
    
  );
};

export default CriteriaTable;