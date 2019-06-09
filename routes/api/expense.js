const express = require('express');
const router = express.Router();

const Expense = require('../../models/expense');

//GET route
router.get('/', (req,res)=>{
    Expense.find()
    .sort({data:-1})
    .then(expenses=>res.json(expenses))
})

//POST route
router.post('/', (req,res)=>{
    const newExpense = new Expense({
        date: req.body.date,
        desc: req.body.desc,
        method: req.body.method,
        amount: req.body.amount
    })
    newExpense.save().then(Expense=> res.json(Expense))
})

//Get expense by ID
router.get("api/expense/:id", (req,res)=>{
    Expense.findById({_id: req.params._id}).then(expense=>res.json(expense)).catch(err=>console.log(err))
})


module.exports= router;