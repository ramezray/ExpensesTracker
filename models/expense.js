const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//schema
const ExpenseSchema = new Schema({
  date:{
      type:Date,
      required:true
  },
  desc: {
    type: String,
    required: true
  },
  method: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  date:{
      type:Date,
      default:Date.now
  }
});

module.exports = Expense = mongoose.model("expenses", ExpenseSchema);
