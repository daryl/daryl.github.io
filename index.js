
import {extname,resolve} from 'path';
import render from './render';
import r from './routes';
import Koa from 'koa';
import fs from 'fs';

/**
 * Application
 */

const app = new Koa;

/**
 * Expose `app`
 */

export default app;

/**
 * Middleware
 */

app.use(serve);
app.use(digest);
app.use(route);

/**
 * Serve static files
 *
 * Directory: 'static'
 *
 * @param {Object} ctx
 * @param {Promise} next
 * @api private
 */

async function serve(ctx, next) {
  const {url} = ctx.req;
  const path = resolve(`./static/${url}`);
  const type = extname(path);

  if(!type) {
    await next();
    return;
  }

  try {
    fs.statSync(path);
    ctx.body = fs.createReadStream(path);
    ctx.type = type;
    return;
  } catch(e) {
    // ...
  }

  await next();
}

/**
 * Digest request
 *
 * @param {Object} ctx
 * @param {Promise} next
 * @api private
 */

async function digest(ctx, next) {
  const {url,headers} = ctx.req;
  const segs = url.split('/').filter(s => s);
  const size = segs.length;

  ctx.state.route = {segs,size};
  ctx.type = 'application/json';

  // ...

  await next();
}

/**
 * Route request
 *
 * @param {Object} ctx
 * @param {Promise} next
 * @api private
 */

async function route(ctx, next) {
  const {url} = ctx.req;
  ctx.body = await render(url);
  ctx.type = 'text/html';
}

