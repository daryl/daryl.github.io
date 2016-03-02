
import {element} from 'deku';
import Html from './Html';

/**
 * Render
 *
 * @param {Object} args
 * @return {Element}
 * @api public
 */

function render({props}) {
  const {path} = props;

  return (
    <Html>
      Path: {path}
    </Html>
  );
}

export default {
  render
};

