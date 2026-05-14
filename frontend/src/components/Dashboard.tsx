import React from "react";
import ClientTable from "./ClientTable";

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Bienvenue dans le SPI</h1>
      <ClientTable />
    </div>
  );
};

export default Dashboard;