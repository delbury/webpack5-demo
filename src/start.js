// import _, { obj } from './lodash';

// obj.count++;
// console.log(obj.count);

// function fn() {
//   console.log(_.join(['This', 'is', 'entry!'], ' '));
// }

// fn();

import('./lodash').then(({ default: _, obj }) => {
  obj.count++;
  console.log(obj.count);


  function fn() {
    console.log(_.join(['This', 'is', 'entry!'], ' '));
  }

  fn();
})

// entry.e375.4c1e.another
// entry.d03f.fd5b.shared
///////asdadadasd