console.log('addtion-loader: init');
const msg = 'this is an additional message.';

module.exports = function(source) {
  console.log('addtion-loader: run');

  source += `\nconst _msg = '${msg}';`
    + `\nconsole.log(_msg);`;
  
  // this.callback(null, source, 'hhh', '233');
  const cb = this.async();
  cb(null, source, 'oooo', '6666');
};

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  console.log('addtion-loader: pitch');
};