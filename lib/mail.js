
import thunkify from 'thunkify';
import mail from 'sendmail';

/**
 * Thinkify `mail`
 */

const wrap = thunkify(mail());

/**
 * Expose `send`
 */

export default send;

/**
 * Send email
 *
 * @param {Object} locals
 * @return {Promise}
 * @api public
 */

function *send(obj={}) {
  return yield wrap(obj);
}

