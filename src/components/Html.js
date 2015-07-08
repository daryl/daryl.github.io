
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
    <html>
    <head>
    <meta charset="utf-8"/>
    <title>{props.name}</title>
    <meta content="width=device-width,initial-scale=1" name="viewport" />
    <meta content={props.bio} name="description"/>
    <link href="/dist/bundle.css" rel="stylesheet"/>
    </head>
    <body>
    {props.children}
    </body>
    </html>
  );
}

/**
 * Expose
 */

export default {
  render
};

