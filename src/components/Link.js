
import {element} from 'deku';

/**
 * Render
 *
 * @param {Object} args
 * @return {Element}
 * @api public
 */

function render({props,children}) {
  let {to,...args} = props;

  return (
    <a href={to} {...args}>
      {children}
    </a>
  );
}

export default {
  render
};

