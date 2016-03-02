
import {element} from 'deku';

/**
 * Render
 *
 * @param {Object} args
 * @return {Element}
 * @api public
 */

function render({children}) {
  return (
    <html>
    <meta charset="utf-8"/>
    <title>Breh</title>
    <body>
    {children}
    </body>
    </html>
  );
}

export default {
  render
};

