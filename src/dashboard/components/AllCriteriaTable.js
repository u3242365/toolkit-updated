import React from "react";
import './Table.css'

const AllCriteriaTable = ({ rubricData}) => {
  // Function to render table rows based on rubric data

  const renderTableRows = () => {

    return Object.keys(rubricData).map((criteria) => (
      <tr key={criteria}>
        <td>{criteria}</td>
        {rubricData[criteria].map((value, index) => (
          <td key={index}>{value}</td>
        ))}
      </tr>
    ));
  };

  return (
    <div>
      <table>
      <thead>
        <tr>
          <th >Criteria</th>
          <th >4</th>
          <th >3</th>
          <th >2</th>
          <th >1</th>
        </tr>
      </thead>
      <tbody>
        {renderTableRows()}
      </tbody>
    </table>
    </div>
    
  );
};

export default AllCriteriaTable;