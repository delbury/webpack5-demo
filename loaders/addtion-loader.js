console.log('addtion-loader: init');
const msg = 'this is an additional message.';

module.exports = function(source) {
  console.log('addtion-loader: run');
  console.log('data', this.data);

  source += `\nconst _msg = '${msg}';`
    + `\nconsole.log(_msg);`;
  
  // this.callback(null, source, 'hhh', '233');
  const cb = this.async();
  cb(null, source, 'oooo', '6666');
};

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  console.log('addtion-loader: pitch');
  console.log('*'.repeat(40));
  console.log('-'.repeat(40));
  console.log(remainingRequest);
  console.log(precedingRequest);
  console.log(data);
  console.log('-'.repeat(40));
  console.log('*'.repeat(40));
};