
import tree from './routes';

/**
 * Digest path
 *
 * @param {String} path
 * @return {Object}
 * @api public
 */

export default function(path) {
  let key = Object.keys(tree).filter(v => v == path);
  if(!key.length) return tree['*'];
  return tree[key];
}

