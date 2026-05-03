export default function Dashboard() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Terra Innova Caledo</h1>
      <h2>Dashboard</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Entreprise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jean Dupont</td>
            <td>jean@mail.com</td>
            <td>Société X</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}