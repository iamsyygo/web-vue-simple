import storeCfg from './plop/config/store.js';
import pageCfg from './plop/config/page.js';
export default function (plop) {
  // create a store generator
  plop.setGenerator('store', storeCfg);
  // create a page generator
  plop.setGenerator('page', pageCfg);
}
