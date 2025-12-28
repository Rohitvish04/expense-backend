const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const {
  addExpense,
  getExpenses,
  updateExpense,
} = require("../controllers/expense.controller");

router.post("/", auth, addExpense);
router.get("/", auth, getExpenses);
router.put("/:id", auth, updateExpense);

module.exports = router;
