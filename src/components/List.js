
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
  let {items,title} = props;

  items = items.map(m =>
    <li>
      <a href={m.h}>
        {m.n}
      </a>
    </li>
  );

  return (
    <div class="List">
      <h4>{title}</h4>
      <ul>{items}</ul>
    </div>
  );
}

/**
 * Expose
 */

export default {
  render
};

