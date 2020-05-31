const express = require('express');
const journeyController = require('./journey.controller');
const usersMiddlewares = require('../users/users.middlewares');

const router = express.Router();

router.post('/', usersMiddlewares.authorize, journeyController.createJourney);
router.get('/', usersMiddlewares.authorize, journeyController.getJourney);

module.exports = router;
