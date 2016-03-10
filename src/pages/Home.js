
import {element} from 'deku';

/**
 * Render
 *
 * @param {Object} args
 * @return {Element}
 * @api public
 */

function render() {
  return (
    <div class="Home">
    <p>
    Heeey. I’m a designer and developer
    from the UK. I also dabble in animation,
    but mostly I just design.
    </p>
    <h4>Links, etc.</h4>
    <nav>
    <a href="//twitter.com/darylginn">Twitter</a>
    <a href="//dribbble.com/daryl">Dribbble</a>
    <a href="//github.com/daryl">Github</a>
    </nav>
    </div>
  );
}

export default {
  render
};

