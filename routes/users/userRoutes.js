const express = require('express');
const {registerUserCtrl, loginUserCtrl, profileUserCtrl, updateUserCtrl, deleteUserCtrl}=require("../../controllers/users/usersController");

const userRoutes = express.Router();

// Route pour la création d'un utilisateur
userRoutes.post("/register",registerUserCtrl );

// Route pour la connexion d'un utilisateur
userRoutes.post("/login", loginUserCtrl);

// Route pour la récupération d'un utilisateur
userRoutes.get("/profile/:id", profileUserCtrl);

// Route pour la suppression d'un utilisateur
userRoutes.delete("/:id", deleteUserCtrl);

// Route pour la modification d'un utilisateur
userRoutes.put("/:id", updateUserCtrl);


module.exports = userRoutes;
