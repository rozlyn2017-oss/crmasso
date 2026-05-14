import React from "react";

const ClientTable: React.FC = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Jean Dupont</td>
          <td>jean.dupont@email.com</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ClientTable;