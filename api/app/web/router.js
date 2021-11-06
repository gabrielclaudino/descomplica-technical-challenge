import Koa from 'koa';
import mount from 'koa-mount';
import healthCheckRouter from './health-check/router';

export default new Koa().use(mount('/', healthCheckRouter.routes()));
