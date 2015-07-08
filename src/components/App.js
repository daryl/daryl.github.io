
import Header from './Header';
import Html from './Html';
import List from './List';
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
  let {api} = props;

  return (
    <Html {...api}>
      <div class="App">
        <Header
        title={api.bio}/>
        <List
        items={api.made}
        title="Made"/>
        <List
        items={api.links}
        title="Links"/>
      </div>
    </Html>
  );
}

/**
 * Expose
 */

export default {
  render
};

