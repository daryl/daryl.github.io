
import rdr from './lib/render';
import mail from './lib/mail';
import parse from 'co-body';

/**
 * Email :)
 */

function *hey() {
  let obj = yield parse.json(this);
  let str = rdr('hey', obj);

  const args = {
    type: 'text/html',
    to: 'hi@daryl.im',
    from: obj.email,
    subject: 'Hey!',
    content: str,
  };

  yield mail(args);
}

/**
 * Index
 */

function *index() {
  this.body = rdr('index');
}

/**
 * Contact
 */

function *contact() {
  this.body = rdr('contact');
}

/**
 * Expose
 */

export default {
  contact,
  index,
  hey,
};

