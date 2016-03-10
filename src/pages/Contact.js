
import {element} from 'deku';

/**
 * Steps...
 */

const PH = [
  `First, what's your name?`,
  `OK. Next, your email?`,
  `And your message...`,
];

/**
 * Render
 *
 * @param {Object} args
 * @return {Element}
 * @api public
 */

function render({context,dispatch}) {
  let {step,name,email,msg} = context;
  let err = [];

  // Default step = 0
  if('undefined' == typeof step) {
    step = 0;
  }

  /**
   * Enter?
   *
   * @param {Event} e
   * @api private
   */

  function press(e) {
    if(13 != e.keyCode) return true;
    // ...
  }

  return (
    <div class="Contact">
    <p>
    Say halo. Introduce yourself.
    Tell me about your idea. Or
    your cat. Anything.
    </p>
    <div class="hey">
    <div class="err">{err}</div>
    <input
    placeholder={PH[step]}
    onKeyPress={press}
    type="text"
    />
    <button>Send</button>
    </div>
    </div>
  );
}

export default {
  render,
};

