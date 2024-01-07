const http = require('http');

const cors = require('cors');
const app = require('./app');
const logger = require('./app/helpers/logger');

app.use(cors());

process.on('uncaughtException', (err) => {
  logger.error(err);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  logger.error(err);
  process.exit(1);
});

const port = process.env.PORT || 3001;

const server = http.createServer(app);

server.listen(3001, () => {
  logger.log(`Houston listening on port :  http://localhost:3001`);
});
