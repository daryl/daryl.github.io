
import {element,string,createApp} from 'deku';
import Html from './components/Html';
import App from './components/App';
import {createStore} from 'redux';
import {route} from './actions';
import reducer from './reducer';
import router from './router';

/**
 * Create store
 */

const store = createStore(reducer);

/**
 * Application
 */

const render = createApp(document.body, store.dispatch);

/**
 * Path change
 */

store.subscribe(() => {
  let state = store.getState();
  let vnext = router(state.path);
  state.route = vnext;
});

/**
 * Render app
 */

store.subscribe(() => {
  let state = store.getState();
  render(<App/>, state);
});

/**
 * Bootstrap
 */

window.onload = function() {
  let {pathname} = location;
  store.dispatch(pathname);
};

