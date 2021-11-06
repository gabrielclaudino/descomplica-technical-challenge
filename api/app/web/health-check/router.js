import Router from 'koa-router';
import { version } from '../../../package.json';

export default new Router().get('/', (ctx) =>
  ctx.ok(`Descomplica API v${version}`)
);
