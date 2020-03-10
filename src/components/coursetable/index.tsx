import React from "react";

interface Props {
  course: string;
}
const CourseTable: React.FC<Props> = ({ course }) => {
  return (
    <div>
      <h3>{course}</h3>
      <table className="o-table">
        <tr>
          <th>Criteria</th>
          <th>Bewijs</th>
        </tr>
        <tr>
          <td>Oordeelsvorming</td>
          <td>(bewijs)</td>
        </tr>
        <tr>
          <td>Trends</td>
          <td>(bewijs)</td>
        </tr>
        <tr>
          <td>Concept</td>
          <td>(bewijs)</td>
        </tr>
      </table>
    </div>
  );
};
export default CourseTable;
