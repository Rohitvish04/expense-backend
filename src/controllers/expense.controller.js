const prisma = require("../config/prisma");

exports.addExpense = async (req, res) => {
  const { title, amount, date, description } = req.body;

  if (!title || !amount || !date) {
    return res.status(400).json({ error: "Required fields missing" });
  }

  const expense = await prisma.expense.create({
    data: {
      title,
      amount: Number(amount),
      date: new Date(date),
      description,
      userId: req.userId,
    },
  });

  res.status(201).json(expense);
};


exports.getExpenses = async (req, res) => {
  const expenses = await prisma.expense.findMany({
    where: { userId: req.userId },
  });

  res.json(expenses);
};

exports.updateExpense = async (req, res) => {
  const { id } = req.params;
  const { title, amount, date, description } = req.body;

  const expense = await prisma.expense.update({
    where: { id: Number(id) },
    data: { title, amount: Number(amount), date: new Date(date), description },
  });

  res.json(expense);
};
