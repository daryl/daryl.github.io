
import {Home,Contact,Four} from './pages';

/**
 * Route tree
 */

export default {
  '/contact': Contact,
  '/': Home,
  '*': Four,
};

