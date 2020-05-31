const mongoose = require('mongoose');

const journeySchema = new mongoose.Schema({
  income: { type: Number, default: 0 },
  plannedExpenses: { type: Number, default: 0 },
  dreamDescription: { type: String },
  currentExpenses: { type: Number, default: 0 },
  dreamCost: { type: Number, default: 0 },
  dreamSaved: { type: Number, default: 0 },
  userId: { type: String },
});

const Journey = mongoose.model('Journey', journeySchema);

module.exports = Journey;
