const Journey = require('./journey.model');

exports.createJourney = async (req, res) => {
  const journey = new Journey(req.body);
  journey.userId = req.user.id;
  await journey.save();
  res.send(journey);
};

exports.getJourney = async (req, res) => {
  const journey = await Journey.find({ userId: req.user.id });
  res.json(journey[0]);
};
