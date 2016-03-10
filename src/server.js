
import {element,string} from 'deku';
import Html from './components/Html';
import router from './router';

/**
 * Render <App/>
 *
 * @param {String} path
 * @return {String}
 * @api public
 */

async function render(path) {
  return string.render(<Html/>, {
    route: router(path),
  });
}

/**
 * Expose
 */

export {
  render,
};

