import print from './print';
const { file, parse } = require('./global.js');

console.log(file);
parse();

function component() {
  const element = document.createElement('div');

  element.innerHTML = join(['Hello', 'webpack'], ' ');

  print()

  return element;
}

document.body.appendChild(component());