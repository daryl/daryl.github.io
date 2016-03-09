
import {element} from 'deku';
import Link from './Link';
import Logo from './Logo';

/**
 * Render
 *
 * @param {Object} args
 * @return {Element}
 * @api public
 */

function render() {
  return (
    <div class="Header">
      <Logo/>
      <nav>
        <Link to="/stuff" disabled>
          Stuff
        </Link>
        <Link to="/contact">
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default {
  render
};

