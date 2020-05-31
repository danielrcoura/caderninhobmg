import 'dotenv/config';

import express from 'express';

import routes from './routes';

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

export default new App();
