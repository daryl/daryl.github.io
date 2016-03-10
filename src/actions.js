
/**
 * Route action
 *
 * @param {String} path
 * @return Object
 * @api public
 */

function route(path) {
  if('undefined' == typeof path) {
    path = location.pathname;
  }

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

