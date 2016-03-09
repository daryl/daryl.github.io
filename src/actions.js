
/**
 * Route action
 *
 * @param {String} path
 * @return Object
 * @api public
 */

function route(path) {
  return {
    type: 'PATH',
    path,
  };
}

/**
 * Expose
 */

export {
  route,
};

