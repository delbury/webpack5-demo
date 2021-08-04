console.log(
  'The print.js module has loaded! See the network tab in dev tools...'
);

console.log(import.meta.url);
console.log(import.meta.webpack);
console.log(import.meta.webpackHot);

console.log(this);
this.console.log('call this.console.log ...');


module.exports = () => {
  console.log('Button Clicked: Here\'s "some text"!');
};