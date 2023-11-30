
const express = require('express');

const userRoutes = express.Router();

// Route pour la création d'un utilisateur
userRoutes.post("/register", async (req, res) => {
  try {
    res.json({ msg: "Register route" });
  } catch (error) {
    res.json(error);
  }
});

// Route pour la connexion d'un utilisateur
userRoutes.post("/login", async (req, res) => {
  try {
    res.json({ msg: "Login routeeeee" });
  } catch (error) {
    res.json(error);
  }
});

// Route pour la récupération d'un utilisateur
userRoutes.get("/profile/:id", async (req, res) => {
  try {
    res.json({ msg: "Profile route" });
  } catch (error) {
    res.json(error);
  }
});

// Route pour la suppression d'un utilisateur
userRoutes.delete("/:id", async (req, res) => {
  try {
    res.json({ msg: "DELETE route" });
  } catch (error) {
    res.json(error);
  }
});

// Route pour la modification d'un utilisateur
userRoutes.put("/:id", async (req, res) => {
  try {
    res.json({ msg: "UPDATE route" });
  } catch (error) {
    res.json(error);
  }
});


module.exports = userRoutes;
