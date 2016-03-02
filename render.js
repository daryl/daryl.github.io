
import {element,string} from 'deku';
import App from './src/App';

/**
 * Render <App/>
 *
 * @param {String} path
 * @return {String}
 * @api public
 */

export default async function(path) {
  const vnode = <App path={path}/>;
  const html =  string.render(vnode);
  return `<!doctype html>${html}`;
}

