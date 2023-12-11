const express = require("express");
const accountRoute = require("./routes/accounts/accountRoute");
const transactionsRoute = require("./routes/transactions/transactionsRoute");
const usersRoutes = require("./routes/users/userRoutes");

const app = express();

//middlewares

//users route
app.use("/api/v1/users", usersRoutes);
//account routes
app.use("/api/v1/accounts", accountRoute);

//transactions route
app.use("/api/v1/transactions", transactionsRoute);

//Error handlers

//listen to server
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server is up and runing on portyy ${PORT}`));
