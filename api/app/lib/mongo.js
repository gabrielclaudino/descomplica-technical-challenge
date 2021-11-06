import mongoose from 'mongoose';
import logger from './logger';

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => logger.info('Connection to MONGO successful'))
  .catch((err) => logger.error(err));
