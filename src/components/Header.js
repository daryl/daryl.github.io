
import {dom} from 'deku';

/**
 * Render
 *
 * @param {Object} {props}
 * @param {Function} next
 * @return jsx
 * @api public
 */

function render({props}) {
  return (
    <header class="Header">
      <h1>{props.title}</h1>
    </header>
  );
}

/**
 * Expose
 */

export default {
  render
};

