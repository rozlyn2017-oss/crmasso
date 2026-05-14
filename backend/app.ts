import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/clients", (req, res) => {
  res.json({ message: "Liste des clients" });
});

app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur le port ${PORT}`);
});