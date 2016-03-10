
import {element,createApp} from 'deku';
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
 * Bootstrap...
 */

window.onload = () => store.dispatch(route());

/**
 * Update route
 */

store.subscribe(function() {
  const obj = store.getState();
  if('PATH' != obj.action) return;
  obj.route = router(obj.path);
});

/**
 * Render app
 */

store.subscribe(function() {
  const obj = store.getState();
  render(<App/>, obj);
});

