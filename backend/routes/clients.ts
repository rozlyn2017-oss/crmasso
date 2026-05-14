import express from "express";
const router = express.Router();

// Exemple de route pour obtenir les clients
router.get("/", (req, res) => {
  res.json({ message: "Liste des clients" });
});

export default router;