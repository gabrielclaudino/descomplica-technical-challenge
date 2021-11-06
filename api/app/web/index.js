import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import compress from 'koa-compress';
import { constants } from 'zlib';
import morgan from 'koa-morgan';
import helmet from 'koa-helmet';
import respond from 'koa-respond';
import mount from 'koa-mount';
import router from './router';

const app = new Koa();

const compressOpts = {
  filter: (contentType) => /text/i.test(contentType),
  threshold: 2048,
  flush: constants.Z_SYNC_FLUSH,
};

app
  .use(
    morgan('combined', {
      skip: (ctx) => ctx.statusCode < 400,
    })
  )
  .use(async (ctx, next) => {
    try {
      await next();
    } catch (error) {
      error.status = error.statusCode || error.status || 500;
      throw error;
    }
  })
  .use(cors())
  .use(respond())
  .use(compress(compressOpts))
  .use(bodyParser({ urlencoded: { extended: true } }))
  .use(helmet())
  .use(mount('/', router));

export default app;
