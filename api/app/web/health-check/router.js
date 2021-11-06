import Router from 'koa-router';
import { version } from '../../../package.json';

export default new Router().get('/', (ctx) => {
  return ctx.ok(`Descomplica API v${process.env.VERSION ? version : ''}`);
});
