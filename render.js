
import {element,string} from 'deku';
import {render} from './src/server';

/**
 * Render <App/>
 *
 * @param {String} path
 * @return {String}
 * @api public
 */

export default async function(path) {
  const html = await render(path);
  return `<!doctype html>${html}`;
}

