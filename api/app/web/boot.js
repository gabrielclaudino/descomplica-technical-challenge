import http from 'http';
import logger from '../lib/logger';
import '../lib/mongo';
import app from './index';

const httpPort = process.env.PORT || 80;
http
  .createServer(app.callback())
  .listen(httpPort, () => logger.info(`API -> http://localhost:${httpPort}`));
