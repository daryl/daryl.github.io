
import Header from './Header';
import {element} from 'deku';

/**
 * Render
 *
 * @param {Object} args
 * @return {Element}
 * @api public
 */

function render({context}) {
  const child = context.route;
  const cnode = element(child);

  return (
    <div>
      <Header/>
      <main>
      {cnode}
      </main>
    </div>
  );
}

export default {
  render
};

