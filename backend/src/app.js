require('dotenv/config');

const express = require('express');
const routes = require('./routes');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  routes() {
    this.server.use(routes);
  }

  middlewares() {
    require('./database/index')();
    this.server.use(express.json());
  }
}

module.exports = new App();
