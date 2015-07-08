
import {dom,tree,renderString} from 'deku';
import App from './components/App';
import api from '../api';

/**
 * App tree
 */

const app = tree(<App api={api}/>);

/**
 * Render app
 */

export default function() {
  return renderString(app);
};

