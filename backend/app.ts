import express from "express";
import clientsRoutes from "./routes/clients";
import workflowsRoutes from "./routes/workflows";

const app = express();
app.use(express.json());

// Routes pour clients et workflows
app.use("/clients", clientsRoutes);
app.use("/workflows", workflowsRoutes);

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => console.log(`Serveur backend démarré : http://localhost:${PORT}`));