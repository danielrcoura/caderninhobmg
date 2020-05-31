const mongoose = require('mongoose');

const journeySchema = new mongoose.Schema({
  income: {
    type: Number,
  },
  plannedExpenses: {
    type: Number,
  },
  dreamDescription: { type: String },
  dreamCost: { type: Number },
  dreamSaved: { type: Number },
  userId: { type: String },
});

const Journey = mongoose.model('Journey', journeySchema);

module.exports = Journey;
