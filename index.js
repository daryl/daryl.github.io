
import trie from 'koa-trie-router';
import serve from 'koa-static';
import r from './routes';
import koa from 'koa';

/**
 * Application
 */

const app = new koa();

/**
 * Expose `app`
 */

export default app;

/**
 * Middleware
 */

app.use(serve('dist'));
app.use(trie(app));
app.use(four);

/**
 * Routes
 */

app.get('/', r.index);
app.get('/contact', r.contact);
app.post('/hey', r.hey);


/**
 * 404 not found
 *
 * @api private
 */

function *four(next) {
  // ...
}

