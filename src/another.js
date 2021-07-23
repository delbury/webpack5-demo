// import _, { obj } from './lodash';

// obj.count++;
// console.log(obj.count);

// console.log(_.join(['Another', 'module', 'loaded!'], ' '));

import('./lodash').then(({ default: _, obj }) => {
  obj.count++;
  console.log(obj.count);

  console.log(_.join(['Another', 'module', 'loaded!'], ' '));
})