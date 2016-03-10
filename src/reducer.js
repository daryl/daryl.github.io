
/**
 * Expose `reducer`
 */

export default reducer;

/**
 * Reducer
 *
 * @param {Object} state
 * @param {Object} action
 * @return state
 * @api public
 */

function reducer(state={}, action) {
  // Record action
  state.action = action;

  switch(action.type) {
  case 'PATH':
    state.path = action.path;
    break;
  }

  return state;
}

