import express from "express";
const router = express.Router();

// Exemple de route pour déclencher un workflow
router.post("/start", (req, res) => {
  res.json({ message: "Workflow démarré" });
});

export default router;