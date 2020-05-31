const express = require('express');
const usersController = require('./users.controller');
const usersMiddlewares = require('./users.middlewares');

const router = express.Router();

router.get(
  '/:user_id',
  usersMiddlewares.authorize,
  usersController.findUserById
);

router.post('/', usersController.createUser);

router.post('/auth', usersController.authenticate);

export default router;
