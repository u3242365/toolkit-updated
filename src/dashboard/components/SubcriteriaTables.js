import React from 'react';

import './Table.css'
import ExportRubricSub from './ExportRubricSub';

const generateSubcriteriaTable = (subcriteria,rubricData) => {
  const rows = [];

  // Iterate over each subcriterion
  for (const subcriterion in subcriteria) {
    if (subcriteria.hasOwnProperty(subcriterion)) {
      const values = subcriteria[subcriterion];
      console.log(values)

      // Generate a row for the subcriterion
      rows.push(
        <tr key={subcriterion}>
          <td>{subcriterion}</td>
          {/* Generate cells for each value */}
          {values.map((value, index) => (
            <td key={index}>{value}</td>
          ))}
        </tr>
      );
    }
  }

  // Return the generated table
  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>Criteria</th>
          <th>4</th>
          <th>3</th>
          <th>2</th>
          <th>1</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
    </div>
  );
};

const SubcriteriaTables = ({ rubricData }) => {
  const tables = [];
  const criteria = rubricData.criteria
  if (!criteria) {
    return <div>Loading...</div>;
  }

  // Iterate over each criterion
  for (const criterion in criteria) {
    if (criteria.hasOwnProperty(criterion)) {
      const subcriteria = criteria[criterion];

      // Generate a table for each subcriterion
      tables.push(
        <div key={criterion}>
          <h2>{criterion}</h2>
          {generateSubcriteriaTable(subcriteria,rubricData)}
        </div>
      );
    }
  }

  // Return the generated tables
  return (
    <div>
      <p>Subject: {rubricData.subject}</p>
      <p>Class Level:{rubricData.classLevel}</p>
      <p>Assessment: {rubricData.assessment}</p>
      <p>Weightage: {rubricData.grade}%</p>
      {tables}

      <ExportRubricSub data={rubricData.criteria} fileName={rubricData.classLevel+"_"+rubricData.subject+"_"+rubricData.assessment}/>
    </div>
  );
};

export default SubcriteriaTables;