import App from './app';

App.server.listen(process.env.PORT, () =>
  console.log(`Listen in port ${process.env.PORT}`)
);
