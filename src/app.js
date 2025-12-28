const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const expenseRoutes = require("./routes/expense.routes");

const app = express();
app.use(cors());
app.use(express.json());    
app.use(express.urlencoded({ extended: true })); 

app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);

module.exports = app;
