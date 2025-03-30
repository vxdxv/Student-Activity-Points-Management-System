import React from 'react';
import './approvals.css'; // Import the CSS file

const ApprovalsTable = () => {
  return (
    <div className="container">
      <h1>Approvals</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Activity</th>
            <th>Pdf/proof</th>
            <th>Approval</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name-cell">John</td> {/* Added class for name cell */}
            <td>Activity name</td>
            <td>
              <button className="view-btn">View</button>
            </td>
            <td>
              <button className="validate-btn">Validate</button>
              <button className="accept-btn">Accept</button>
              <button className="reject-btn">Reject</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ApprovalsTable;