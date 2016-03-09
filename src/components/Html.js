
import {element} from 'deku';
import App from './App';

/**
 * Render
 *
 * @param {Object} args
 * @return {Element}
 * @api public
 */

function render() {
  return (
    <html>
    <meta charset="utf-8"/>
    <title>Breh</title>
    <body>
    <App/>
    </body>
    </html>
  );
}

export default {
  render
};

