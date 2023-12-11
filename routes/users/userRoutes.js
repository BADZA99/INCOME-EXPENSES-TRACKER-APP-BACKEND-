const express = require('express');
const {registerUserCtrl, userLoginCtrl, userProfileCtrl, updateUserCtrl, deleteUserCtrl}=require("../../controllers/users/usersCtrl");

const userRoutes = express.Router();

// Route pour la création d'un utilisateur
userRoutes.post("/register",registerUserCtrl );

// Route pour la connexion d'un utilisateur
userRoutes.post("/login", userLoginCtrl);

// Route pour la récupération d'un utilisateur
userRoutes.get("/profile/:id", userProfileCtrl);

// Route pour la suppression d'un utilisateur
userRoutes.delete("/:id", deleteUserCtrl);

// Route pour la modification d'un utilisateur
userRoutes.put("/:id", updateUserCtrl);


module.exports = userRoutes;
